#!/usr/bin/env python3
"""
Generate custom favicon for Shahriar Hooshmand's portfolio
Creates a professional favicon with initials "SH" in portfolio theme colors
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_favicon():
    # Create 64x64 image with RGBA mode for transparency
    size = 64
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Portfolio theme colors
    bg_color = (80, 0, 202, 255)  # #5000ca
    text_color = (255, 255, 255, 255)  # white

    # Create background with rounded corners
    draw.rounded_rectangle([0, 0, size-1, size-1], radius=8, fill=bg_color)

    # Add subtle gradient effect by drawing overlays
    overlay_color = (58, 0, 150, 100)  # Darker purple with transparency
    draw.rounded_rectangle([0, size//2, size-1, size-1], radius=8, fill=overlay_color)

    # Try to use a system font, fallback to default
    try:
        # Try common system fonts
        font_size = 32
        font_paths = [
            "C:/Windows/Fonts/arial.ttf",
            "C:/Windows/Fonts/calibri.ttf",
            "/System/Library/Fonts/Arial.ttf",  # macOS
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"  # Linux
        ]

        font = None
        for font_path in font_paths:
            if os.path.exists(font_path):
                font = ImageFont.truetype(font_path, font_size)
                break

        if not font:
            font = ImageFont.load_default()

    except:
        font = ImageFont.load_default()

    # Calculate text position for centering
    text = "SH"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]

    x = (size - text_width) // 2
    y = (size - text_height) // 2 - 2  # Slight adjustment for visual centering

    # Add text shadow for depth
    shadow_color = (0, 0, 0, 128)
    draw.text((x+1, y+1), text, font=font, fill=shadow_color)

    # Draw main text
    draw.text((x, y), text, font=font, fill=text_color)

    return img

def create_alternative_favicon():
    """Create a more tech/AI-themed alternative"""
    size = 64
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Dark tech background
    bg_color = (26, 26, 26, 255)  # Dark gray
    accent_color = (80, 0, 202, 255)  # Portfolio purple
    text_color = (255, 255, 255, 255)

    # Background
    draw.rounded_rectangle([0, 0, size-1, size-1], radius=6, fill=bg_color)

    # Tech border
    draw.rounded_rectangle([2, 2, size-3, size-3], radius=4, outline=accent_color, width=2)

    # Inner accent lines
    draw.rounded_rectangle([8, 8, size-9, size-9], radius=2, outline=(accent_color[0], accent_color[1], accent_color[2], 100), width=1)

    # Text
    try:
        font_paths = [
            "C:/Windows/Fonts/consola.ttf",  # Consolas - monospace
            "C:/Windows/Fonts/arial.ttf",
        ]

        font = None
        for font_path in font_paths:
            if os.path.exists(font_path):
                font = ImageFont.truetype(font_path, 26)
                break

        if not font:
            font = ImageFont.load_default()

    except:
        font = ImageFont.load_default()

    text = "SH"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]

    x = (size - text_width) // 2
    y = (size - text_height) // 2

    # Purple glow effect
    draw.text((x, y), text, font=font, fill=accent_color)
    # White overlay for contrast
    draw.text((x-1, y-1), text, font=font, fill=text_color)

    return img

def save_favicon_formats(img, base_name="favicon"):
    """Save favicon in multiple required formats"""
    # Save as PNG (modern browsers)
    img.save(f"public/{base_name}.png")

    # Save as ICO (classic favicon)
    # Create multiple sizes for ICO
    sizes = [16, 32, 48, 64]
    ico_images = []

    for size in sizes:
        resized = img.resize((size, size), Image.Resampling.LANCZOS)
        ico_images.append(resized)

    # Save ICO with multiple sizes
    ico_images[0].save(f"public/{base_name}.ico", format='ICO', sizes=[(s, s) for s in sizes])

    # Also save specific sizes for manifest
    img.resize((192, 192), Image.Resampling.LANCZOS).save("public/logo192.png")
    img.resize((512, 512), Image.Resampling.LANCZOS).save("public/logo512.png")

    print(f"Created favicon files:")
    print(f"   - public/{base_name}.ico (16x16, 32x32, 48x48, 64x64)")
    print(f"   - public/{base_name}.png (64x64)")
    print(f"   - public/logo192.png (192x192)")
    print(f"   - public/logo512.png (512x512)")

if __name__ == "__main__":
    print("Generating custom favicon for Shahriar Hooshmand...")

    # Change to the correct directory
    os.chdir("C:/Users/drsha/OneDrive - HP Inc/Shahriar_work/personal_git/WEB/shahriar-portfolio")

    # Create main favicon
    favicon_img = create_favicon()
    save_favicon_formats(favicon_img, "favicon")

    # Create alternative tech-themed version
    alt_favicon_img = create_alternative_favicon()
    save_favicon_formats(alt_favicon_img, "favicon-alt")

    print("\nFavicon generation complete!")
    print("   To use: The favicon.ico will be automatically used")
    print("   To try alternative: Rename favicon-alt.ico to favicon.ico")