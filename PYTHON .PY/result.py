def calculate_total_and_average(marks):
    total = sum(marks)
    average = total / len(marks)
    return total, average

# Input
name = input("Enter student's name: ")
marks = []
for i in range(3):
    mark = float(input(f"Enter marks for subject {i+1}: "))
    marks.append(mark)

# Calculate
total, average = calculate_total_and_average(marks)

# Result
result = "Pass" if average >= 40 else "Fail"

# Display
print("\n--- Student Result ---")
print(f"Name    : {name}")
print(f"Total   : {total}")
print(f"Average : {average:.2f}")
print(f"Result  : {result}")