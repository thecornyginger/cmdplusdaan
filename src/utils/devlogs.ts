import matter from 'gray-matter'

// Function to load all devlogs
export async function loadDevlogs() {
  const devlogModules = import.meta.glob('/src/devlogs/*.md', { 
    query: '?raw',
    import: 'default'
  })
  
  const devlogs: any[] = []
  
  for (const [path, moduleLoader] of Object.entries(devlogModules)) {
    try {
      const content = await moduleLoader() as string
      const filename = path.split('/').pop() || ''
      const { data: frontmatter, content: markdownContent } = matter(content)
      
      const slug = frontmatter.slug || filename.replace(/\.md$/, '')
      
      devlogs.push({
        slug,
        title: frontmatter.title || 'Untitled',
        date: frontmatter.date || new Date().toISOString().split('T')[0],
        tags: frontmatter.tags || [],
        excerpt: frontmatter.excerpt || '',
        content: markdownContent
      })
    } catch (error) {
      console.error(`[devlogUtils] Error loading devlog ${path}:`, error)
    }
  }
  
  return devlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Function to get a single devlog by slug
export async function getDevlogBySlug(slug: string) {
  const devlogs = await loadDevlogs()
  return devlogs.find(devlog => devlog.slug === slug)
}

// Function to get all unique tags
export async function getAllTags() {
  const devlogs = await loadDevlogs()
  const tagSet = new Set<string>()
  devlogs.forEach(devlog => {
    devlog.tags.forEach((tag: string) => tagSet.add(tag))
  })
  return Array.from(tagSet).sort()
}

export function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}