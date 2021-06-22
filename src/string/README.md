# Strings

## @mentions
```typescript
const mentions = mentionParser('This is a test @test @test_234 and @test_o82')
```

## #hashtags
```typescript
const mentions = hashtagParser('This is a test #test #test_234 and #test_o82')
```

## String Helpers
| Name | Description |
|---|---|
| String.prototype.toTitleCase | Change the text of a string to title case |
| String.prototype.removeExtraSpaces | Condenses spaces to a single space |