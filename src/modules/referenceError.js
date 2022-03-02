export const referenceError = (err) => {
  throw new ReferenceError(`Error code - ${err.code} and description: ${err.message}`)
}
