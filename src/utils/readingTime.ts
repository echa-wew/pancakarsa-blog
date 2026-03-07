export function getReadingTime(content: string): string {
	// Remove markdown syntax and HTML tags
	const text = content
		.replace(/```[\s\S]*?```/g, '') // Remove code blocks
		.replace(/`[^`]+`/g, '') // Remove inline code
		.replace(/<[^>]*>/g, '') // Remove HTML tags
		.replace(/[#*_~\[\]]/g, ''); // Remove markdown symbols

	// Count words
	const words = text.trim().split(/\s+/).length;

	// Calculate reading time (average 200 words per minute)
	const minutes = Math.ceil(words / 200);

	if (minutes === 1) {
		return '1 menit';
	} else {
		return `${minutes} menit`;
	}
}