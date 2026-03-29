// Simple image mapping. Replace these imports with real JPG assets when available.
import hero from '../assets/hero.png'

const slugToImage: Record<string, string> = {
	'ai-tools-for-students': hero,
	'best-ai-note-taking-tools-for-students': hero,
	'chatgpt-study-prompts': hero,
	'ai-reading-comprehension-tools': hero,
	'ai-essay-outline-generators': hero,
	'ai-student-email-assistant': hero,
	'ai-time-blocking-study-plan': hero,
	'ai-pdf-annotation-tools': hero
}

export function getArticleImage(slug?: string, _tags?: string[]): string {
	if (slug && slugToImage[slug]) return slugToImage[slug]
	return hero
}

