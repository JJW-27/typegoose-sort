# Typegoose Sort README

## Overview

Typegoose Sort is a tool for sorting typegoose models by property name

## How to use

Highlight the properties you would like to sort

Type 'Typegoose Sort' into the command palette (Cmd + Shift + P)

## Caveats

Models must be **double new-line separated**

Models will be sorted using `.localeCompare()` (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

# Example:

Unsorted code:
<img width="408" alt="unsorted code" src="https://github.com/user-attachments/assets/40cd170b-70ca-4e07-89f9-7b8a27b6e224">

Sorted code:
<img width="408" alt="sorted code" src="https://github.com/user-attachments/assets/15cb6617-cd08-422a-8045-0a9803383237">
