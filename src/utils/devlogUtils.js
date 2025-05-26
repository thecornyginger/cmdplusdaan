import matter from 'gray-matter'
import { marked } from 'marked'

// Configure marked for better HTML output
marked.setOptions({
  breaks: true,
  gfm: true,
})

// Function to get all available images from the devlog-img folder
async function getAvailableImages() {
  const imageModules = import.meta.glob('/src/assets/devlog-img/*', { 
    query: '?url',
    import: 'default'
  })
  
  const images = {}
  for (const [path, moduleLoader] of Object.entries(imageModules)) {
    try {
      const imageUrl = await moduleLoader()
      const filename = path.split('/').pop()
      const nameWithoutExt = filename.replace(/\.[^/.]+$/, '')
      images[nameWithoutExt] = imageUrl
      console.log(`Loaded image: ${nameWithoutExt} -> ${imageUrl}`)
    } catch (error) {
      console.error(`Error loading image ${path}:`, error)
    }
  }
  
  console.log('Available images:', Object.keys(images))
  return images
}

// Function to process image references in markdown content
async function processImages(content) {
  const availableImages = await getAvailableImages()
  
  // Replace [imgX] syntax (e.g., [img1], [img2])
  content = content.replace(/\[img(\d+)\]/gi, (match, number) => {
    const imageName = `aseprite-${number}`
    if (availableImages[imageName]) {
      return `![Image ${number}](${availableImages[imageName]})`
    }
    console.warn(`Image not found: ${imageName} (referenced as ${match})`)
    return `*[Image ${number} - not found: ${imageName}]*` // More visible fallback
  })
  
  // Replace [IMAGE X: description] syntax
  content = content.replace(/\[IMAGE (\d+):\s*([^\]]+)\]/gi, (match, number, description) => {
    const imageName = `aseprite-${number}`
    if (availableImages[imageName]) {
      return `![${description}](${availableImages[imageName]})`
    }
    console.warn(`Image not found: ${imageName} (referenced as ${match})`)
    return `*[${description} - not found: ${imageName}]*` // More visible fallback
  })
  
  // Replace [imageName] syntax for direct filename references
  content = content.replace(/\[([a-zA-Z0-9\-_]+)\]/g, (match, imageName) => {
    if (availableImages[imageName]) {
      return `![${imageName}](${availableImages[imageName]})`
    }
    // Only warn for non-img patterns to avoid double warnings
    if (!imageName.match(/^img\d+$/)) {
      console.warn(`Image not found: ${imageName} (referenced as ${match})`)
      return `*[Image not found: ${imageName}]*` // More visible fallback
    }
    return match // Keep original if image not found
  })
  
  return content
}

// Function to process a single devlog file
export async function processDevlog(content, filename) {
  const { data: frontmatter, content: markdownContent } = matter(content)
  
  const slug = frontmatter.slug || filename.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '')
  
  let date = frontmatter.date
  if (!date) {
    const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})/)
    if (dateMatch) {
      date = new Date(dateMatch[1])
    }
  } else if (typeof date === 'string') {
    date = new Date(date)
  }
  
  // Process images in the markdown content
  const processedContent = await processImages(markdownContent)
  
  return {
    slug,
    title: frontmatter.title || 'Untitled',
    date: date || new Date(),
    tags: frontmatter.tags || [],
    category: frontmatter.category || 'general',
    excerpt: frontmatter.excerpt || '',
    content: processedContent,
    html: marked(processedContent),
    frontmatter
  }
}

// Function to load all devlogs
export async function loadDevlogs() {
  const devlogModules = import.meta.glob('/src/devlogs/*.md', { 
    query: '?raw',
    import: 'default'
  })
  
  const devlogs = []
  
  for (const [path, moduleLoader] of Object.entries(devlogModules)) {
    try {
      const content = await moduleLoader()
      const filename = path.split('/').pop()
      const devlog = await processDevlog(content, filename)
      devlogs.push(devlog)
    } catch (error) {
      console.error(`[devlogUtils] Error loading devlog ${path}:`, error)
    }
  }
  
  return devlogs.sort((a, b) => new Date(b.date) - new Date(a.date))
}

// Function to get a single devlog by slug
export async function getDevlogBySlug(slug) {
  const devlogs = await loadDevlogs()
  return devlogs.find(devlog => devlog.slug === slug)
}

// Function to get devlogs by tag
export async function getDevlogsByTag(tag) {
  const devlogs = await loadDevlogs()
  return devlogs.filter(devlog => devlog.tags.includes(tag))
}

// Function to get all unique tags
export async function getAllTags() {
  const devlogs = await loadDevlogs()
  const tagSet = new Set()
  devlogs.forEach(devlog => {
    devlog.tags.forEach(tag => tagSet.add(tag))
  })
  return Array.from(tagSet).sort()
} 