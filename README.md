# typegoose-sort README

## Overview

Typegoose sort (typegoose-sort) is a tool for sorting typegoose models by property name

## How to use

Highlight the properties you would like to sort

Type 'Typegoose sort' into the command palette (Cmd + Shift + P)

## Caveats

Models must be single new-line separated

Models will be sorted using `.localeCompare()` (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

# Example:

Unsorted code:
:::image type="content" source="images/unsorted-code.png" alt-text="unsorted code":::

Sorted code:
:::image type="content" source="images/sorted-code.png" alt-text="unsorted code":::

## Release Notes

### 1.0.0

Initial release
