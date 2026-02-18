# 3D Student Model Setup Guide

## Overview
This hero section uses a 3D student model that follows the mouse cursor with head rotation. The code is structured to easily swap between a placeholder model and a GLB/GLTF model.

## Current Setup
- **Placeholder Model**: Currently using a procedural placeholder student model
- **GLB Model**: Ready to load when you provide a GLB file

## How to Add Your GLB Model

### Step 1: Place Your Model
1. Place your GLB/GLTF student model file in: `/public/models/student.glb`
2. Supported formats: `.glb` (recommended) or `.gltf`

### Step 2: Enable GLB Loading
In `Hero.jsx`, change:
```jsx
<StudentScene mouse={mouse} useGLB={false} glbPath="/models/student.glb" />
```
to:
```jsx
<StudentScene mouse={mouse} useGLB={true} glbPath="/models/student.glb" />
```

### Step 3: Model Requirements
For head tracking to work properly, your GLB model should:
- Have a bone/node named containing "head" or "Head" (case-insensitive)
- Or have a mesh named containing "head"
- Be properly rigged with bones if using skeletal animation
- Be scaled appropriately (the code auto-scales to fit)

### Step 4: Adjust Model Position/Scale
If your model needs positioning adjustments, edit `StudentScene.jsx`:
- Change `position={[0, -1, 0]}` in the GLBStudent component
- Adjust `scale={1.2}` if model is too large/small

## Model Recommendations

### Free Sources:
1. **Mixamo** (Adobe): https://www.mixamo.com/
   - Download a character with "Idle" animation
   - Export as GLB format
   - Models are rigged and ready to use

2. **Sketchfab**: https://sketchfab.com/
   - Search for "student" or "character" models
   - Filter by "Downloadable" and "GLB" format
   - Many free educational models available

3. **Poly Haven**: https://polyhaven.com/models
   - Free 3D models (some characters available)

### Model Specifications:
- **Format**: GLB (binary GLTF) preferred
- **Poly Count**: 5,000-20,000 triangles (for performance)
- **Textures**: Include if possible (will auto-load)
- **Animations**: Optional (idle animation works well)

## Troubleshooting

### Model Not Loading:
1. Check file path: `/public/models/student.glb`
2. Verify file exists and is valid GLB
3. Check browser console for errors
4. Ensure `useGLB={true}` is set

### Head Not Rotating:
1. Check if model has "head" bone/mesh in name
2. Open GLB in Blender/glTF Viewer to verify structure
3. Adjust bone names in `StudentScene.jsx` if needed
4. Check console for warnings about missing bones

### Performance Issues:
1. Reduce model poly count
2. Lower `dpr={[1, 2]}` to `dpr={[1, 1.5]}` in Canvas
3. Disable shadows if needed
4. Reduce texture resolution

## Code Structure

- `Hero.jsx`: Main hero component with layout and mouse tracking
- `StudentScene.jsx`: 3D scene setup with lighting and model loading
- `PlaceholderStudent`: Fallback procedural model (always works)
- `GLBStudent`: GLB loader with head tracking logic

## Customization

### Adjust Head Rotation Sensitivity:
In `StudentScene.jsx`, modify:
```jsx
headRotation.y * 0.5  // Horizontal sensitivity (0.5 = moderate)
headRotation.x * 0.3  // Vertical sensitivity (0.3 = limited)
```

### Adjust Smoothness:
Change lerp value (0.1 = smooth, 0.3 = faster):
```jsx
THREE.MathUtils.lerp(current, target, 0.1)
```

### Add More Students:
Duplicate the StudentModel component and adjust positions:
```jsx
<StudentModel position={[-2, 0, 0]} />
<StudentModel position={[0, 0, 0]} />
<StudentModel position={[2, 0, 0]} />
```
