const mentionRegex = /\B@\w+/g
export function mentionParser(str: string) {
  const matched = str.match(mentionRegex) ?? []
  return matched.map(x => x.trim().replace('@', ''))
}