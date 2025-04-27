#!/bin/bash

# Đường dẫn thư mục
input_folder="Selected_webp"
output_folder="Avif"

# Tạo thư mục đích nếu chưa có
mkdir -p "$output_folder"

# Lặp qua tất cả các tệp WebP trong thư mục gốc
for file in "$input_folder"/*.webp; do
  # Lấy tên tệp (không có phần mở rộng)
  filename=$(basename "$file" .webp)

  # Chuyển đổi sang AVIF
  convert "$file" -quality 70 "$output_folder/$filename.avif"
  echo "Đã chuyển đổi: $file -> $output_folder/$filename.avif"
done

echo "✅ Hoàn thành! Tất cả ảnh đã được chuyển đổi sang định dạng AVIF."