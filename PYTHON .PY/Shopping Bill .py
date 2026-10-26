def calculate_total(products):
    return sum(products.values())

products = {
    "Laptop": 45000,
    "Mouse": 500,
    "Keyboard": 800,
    "Headphones": 1200,
    "USB Cable": 300
}

# Display products
print("--- Products ---")
for name, price in products.items():
    print(f"{name}: ₹{price}")

# Calculate
total = calculate_total(products)
discount = total * 0.10 if total >= 1000 else 0
final_bill = total - discount

# Display
print("\n--- Bill ---")
print(f"Total Price   : ₹{total}")
print(f"Discount (10%): ₹{discount}")
print(f"Final Bill    : ₹{final_bill}")