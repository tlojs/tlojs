const mentionRegex = /\B#\w+/g
export function hashtagParser(str: string) {
  const matched = str.match(mentionRegex) ?? []
  return matched.map(x => x.trim().replace('#', ''))
}