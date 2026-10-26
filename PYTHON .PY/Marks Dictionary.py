students = {
    "Aarav": 78,
    "Diya": 45,
    "Rohan": 92,
    "Meera": 38,
    "Kabir": 65
}


print("--- All Students ---")
for name, mark in students.items():
    print(f"{name}: {mark}")


print("\n--- Students with 50 or above ---")
for name, mark in students.items():
    if mark >= 50:
        print(f"{name}: {mark}")


highest = max(students.values())
topper = [name for name, mark in students.items() if mark == highest]
print(f"\nHighest Mark: {highest} (by {', '.join(topper)})")