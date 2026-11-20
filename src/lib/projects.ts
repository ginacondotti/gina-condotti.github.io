// Loads every Markdown file in src/projects/ and turns it into a project.
// The file name becomes the page address: retargeting.md -> /work/retargeting/
const modules = import.meta.glob('../projects/*.md', { eager: true }) as Record<string, any>;

export const projects = Object.entries(modules)
  .map(([path, mod]) => ({
    slug: path.split('/').pop()!.replace(/\.md$/, ''),
    title: mod.frontmatter.title as string,
    studio: mod.frontmatter.studio as string,
    summary: mod.frontmatter.summary as string,
    tags: (mod.frontmatter.tags ?? []) as string[],
    image: mod.frontmatter.image as string | undefined,
    imageAlt: (mod.frontmatter.imageAlt ?? '') as string,
    placeholder: (mod.frontmatter.placeholder ?? 'Add an image') as string,
    order: (mod.frontmatter.order ?? 99) as number,
    highlight: Boolean(mod.frontmatter.highlight),
    draft: Boolean(mod.frontmatter.draft),
    Content: mod.Content,
  }))
  .filter((p) => !p.draft)
  .sort((a, b) => a.order - b.order);
