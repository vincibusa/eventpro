export function createStaggerDelay(index: number, delayMs = 100): number {
	return index * delayMs
}

export function getAnimationClass(index: number, baseClass = 'animate-slide-up'): string {
	return `${baseClass}`
}

