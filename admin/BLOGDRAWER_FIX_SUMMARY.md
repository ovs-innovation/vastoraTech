# BlogDrawer.jsx - Image Display Fix

## Problem
Images embedded in blog content were not displaying in the draft-js editor when editing existing blogs.

## Root Cause
The complex image entity creation logic in `convertHTMLToEditorState` was:
1. Replacing img tags with placeholders
2. Attempting to recreate image entities with complex block manipulation
3. This was error-prone and caused images to not render properly

The data from the database shows images are stored as proper HTML:
```html
<img src="https://res.cloudinary.com/dhqcwkpzp/image/upload/v1762788535/blogs/post-box-thumb-1.webp" alt="" style="height: auto;width: auto"/>
```

## Solution Implemented

### 1. Simplified `convertHTMLToEditorState` Function
- Removed complex placeholder and entity recreation logic
- Now uses `stateFromHTML` to directly convert HTML to ContentState
- The library handles IMAGE entity creation automatically
- Fallback to simple conversion if issues occur

### 2. Enhanced `ImageComponent` 
- Added robust entity data retrieval
- Handles cases where entityKey might not be at position 0
- Iterates through block to find IMAGE entities
- Better null/undefined handling

### 3. Added `renderImage` Helper Function
- Extracted image rendering logic into reusable component
- Cleaner, more maintainable code
- Proper default handling for missing alt text, width, height

### 4. Improved `blockRendererFn`
- Better structured return object
- Properly passes block and contentState to ImageComponent

## How It Works Now

1. **On Load**: When editing a blog, the HTML content containing img tags is directly converted to ContentState
2. **Rendering**: The `stateFromHTML` library automatically creates IMAGE entities for img tags
3. **Display**: The `blockRendererFn` identifies atomic blocks (images) and uses `ImageComponent` to render them
4. **On Save**: Draft-js converts the state back to HTML with `draftToHtml`, preserving image tags

## Testing

After these changes:
1. Open the blog drawer with an existing blog that has images
2. Images should now display correctly in the editor
3. Images should maintain their dimensions and alt text
4. New images can still be uploaded and will work as before
5. Saving preserves image HTML correctly

## Files Modified
- `/admin/src/components/drawer/BlogDrawer.jsx`
