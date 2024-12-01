# Typegoose Sort README

## Overview

Typegoose Sort is a tool for sorting typegoose models by property name

## How to use

Highlight the properties you would like to sort

Type 'Typegoose Sort' into the command palette (Cmd + Shift + P)

## Caveats

Models must be **double new-line separated**

Models will be sorted using `.localeCompare()` (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

## Example

**Unsorted code:**

```typescript
@prop({ ref: "UserSchema" })
public propA?: Ref<UserSchema>;

@prop({ type: () => String })
public propD?: string;

@prop({ type: () => Number })
public propX?: number;

@prop({ type: () => mongoose.Types.ObjectId })
public propC?: mongoose.Types.ObjectId;

@prop({ type: () => [String] })
public prop1?: string[];
```

**Sorted code:**

```typescript
@prop({ type: () => [String] })
public prop1?: string[];

@prop({ ref: "UserSchema" })
public propA?: Ref<UserSchema>;

@prop({ type: () => mongoose.Types.ObjectId })
public propC?: mongoose.Types.ObjectId;

@prop({ type: () => String })
public propD?: string;

@prop({ type: () => Number })
public propX?: number;
```
