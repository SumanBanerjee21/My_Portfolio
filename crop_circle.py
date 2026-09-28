from PIL import Image, ImageDraw

def make_circle_transparent_png(input_path, output_path):
    # Open the image and ensure it has an alpha channel
    img = Image.open(input_path).convert("RGBA")
    
    # Create a mask with the same size as the image
    mask = Image.new("L", img.size, 0)
    draw = ImageDraw.Draw(mask)
    
    # Draw a white circle on the mask
    # The bounding box is (0, 0, width, height)
    draw.ellipse((0, 0, img.size[0], img.size[1]), fill=255)
    
    # Apply the mask to the image using the alpha channel
    # This keeps the image where mask is 255 (white) and transparent where 0 (black)
    img.putalpha(mask)
    
    # Save as PNG to preserve transparency
    img.save(output_path, "PNG")

make_circle_transparent_png("public/logo.jpg", "public/logo.png")
