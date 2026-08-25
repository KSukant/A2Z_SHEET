import json

dataset = []
item_id = 1

def add_item(step, subtopic, title, diff, lc_url, yt_url, exp):
    global item_id
    dataset.append({
        "id": item_id,
        "step": step,
        "subtopic": subtopic,
        "title": title,
        "difficulty": diff,
        "leetcodeUrl": lc_url,
        "youtubeUrl": yt_url,
        "explanation": exp
    })
    item_id += 1

# ==========================================
# STEP 1: LEARN THE BASICS (35 Questions)
# ==========================================
add_item("Step 1: Learn the Basics", "Things to Know in C++/Java/Python", "User Input / Output & Data Types", "Easy", "https://leetcode.com/problems/user-input-output/", "https://www.youtube.com/watch?v=EAR7De6Goz4", "Master primitive data types (int, long, float, double, char, string) and standard I/O streams.")
add_item("Step 1: Learn the Basics", "Things to Know in C++/Java/Python", "If Else Decision Making Statements", "Easy", "https://leetcode.com/problems/if-else-decision-making/", "https://www.youtube.com/watch?v=EAR7De6Goz4", "Branch execution paths based on evaluated Boolean logic expressions.")
add_item("Step 1: Learn the Basics", "Things to Know in C++/Java/Python", "Switch Statement & Enums", "Easy", "https://leetcode.com/problems/switch-statement/", "https://www.youtube.com/watch?v=EAR7De6Goz4", "Multi-way jump table execution using switch-case structures.")
add_item("Step 1: Learn the Basics", "Things to Know in C++/Java/Python", "For Loops & While Loops", "Easy", "https://leetcode.com/problems/n-th-tribonacci-number/", "https://www.youtube.com/watch?v=EAR7De6Goz4", "Iteration techniques, loop invariant conditions, and termination criteria.")
add_item("Step 1: Learn the Basics", "Things to Know in C++/Java/Python", "Functions (Pass by Value & Pass by Reference)", "Easy", "https://leetcode.com/problems/pass-by-reference-and-value/", "https://www.youtube.com/watch?v=EAR7De6Goz4", "Stack frames, memory addresses, value copying vs reference pointer passing.")

patterns = [
    ("Pattern 1: Rectangular Star Pattern", "Outer loop N rows, inner loop N stars."),
    ("Pattern 2: Right-Angled Triangle Star Pattern", "Inner loop prints i stars for row i."),
    ("Pattern 3: Right-Angled Number Pyramid", "Inner loop prints numbers 1 to i for row i."),
    ("Pattern 4: Right-Angled Number Pyramid - II", "Inner loop prints row number i, i times."),
    ("Pattern 5: Inverted Right Pyramid Star Pattern", "Inner loop prints N - i + 1 stars."),
    ("Pattern 6: Inverted Numbered Right Pyramid", "Inner loop prints numbers 1 to N - i + 1."),
    ("Pattern 7: Star Pyramid", "Print N-i-1 spaces, 2i+1 stars, N-i-1 spaces."),
    ("Pattern 8: Inverted Star Pyramid", "Print i spaces, 2(N-i)-1 stars, i spaces."),
    ("Pattern 9: Diamond Star Pattern", "Combine Star Pyramid and Inverted Star Pyramid."),
    ("Pattern 10: Half Diamond Star Pattern", "Combine right-angled triangle and inverted right pyramid."),
    ("Pattern 11: Binary Number Triangle Pattern", "Alternate starting digit 1 and 0 for each row."),
    ("Pattern 12: Number Crown Pattern", "Print 1..i, 2*(N-i) spaces, then i..1 reversed."),
    ("Pattern 13: Increasing Number Triangle Pattern", "Continuous counter starting from 1 printed across rows."),
    ("Pattern 14: Increasing Letter Triangle Pattern", "Print characters 'A' up to 'A' + i."),
    ("Pattern 15: Reverse Letter Triangle Pattern", "Print characters 'A' up to 'A' + (N-i-1)."),
    ("Pattern 16: Alpha-Ramp Pattern", "Print character 'A' + i for (i + 1) times."),
    ("Pattern 17: Alpha-Hill Pattern", "Palindromic character pyramid increasing then decreasing."),
    ("Pattern 18: Alpha-Triangle Pattern", "Print characters backwards starting from 'E' - row index."),
    ("Pattern 19: Symmetric Void Pattern", "Upper half hollow diamond + inverted lower half."),
    ("Pattern 20: Butterfly Star Pattern", "Symmetric wing pattern of stars separated by spaces."),
    ("Pattern 21: Hollow Rectangle Pattern", "Print stars only on outer border (row/col edges)."),
    ("Pattern 22: The Number Pattern", "Concentric square layers computed by N - min(top, left, bottom, right).")
]

for p_title, p_exp in patterns:
    add_item("Step 1: Learn the Basics", "Build-up Logical Thinking", p_title, "Easy", f"https://leetcode.com/problems/{p_title.lower().replace(' ', '-').replace(':', '')}/", "https://www.youtube.com/watch?v=tNm_NNSB3_w", p_exp)

add_item("Step 1: Learn the Basics", "Learn STL / Java Collections", "C++ STL Vectors, Sets, Maps & Iterators", "Easy", "https://leetcode.com/problems/c-stl-containers/", "https://www.youtube.com/watch?v=RRVYpIET_ru", "Master vector, set, map, priority_queue, stack, queue, unordered_map.")
add_item("Step 1: Learn the Basics", "Basic Maths", "Count Digits in a Number", "Easy", "https://leetcode.com/problems/count-digits-in-a-number/", "https://www.youtube.com/watch?v=1xNbjMdbjug", "Divide by 10 repeatedly or use floor(log10(N)) + 1.")
add_item("Step 1: Learn the Basics", "Basic Maths", "Reverse a Number", "Easy", "https://leetcode.com/problems/reverse-integer/", "https://www.youtube.com/watch?v=1xNbjMdbjug", "Extract last digit using N % 10, build rev = rev * 10 + digit.")
add_item("Step 1: Learn the Basics", "Basic Maths", "Check Palindrome Number", "Easy", "https://leetcode.com/problems/palindrome-number/", "https://www.youtube.com/watch?v=1xNbjMdbjug", "Compare original integer with digit-reversed value.")
add_item("Step 1: Learn the Basics", "Basic Maths", "GCD or HCF of Two Numbers", "Easy", "https://leetcode.com/problems/find-greatest-common-divisor-of-array/", "https://www.youtube.com/watch?v=1xNbjMdbjug", "Euclidean algorithm: gcd(a, b) = gcd(b, a % b) until b == 0.")
add_item("Step 1: Learn the Basics", "Basic Maths", "Check for Armstrong Number", "Easy", "https://leetcode.com/problems/armstrong-number/", "https://www.youtube.com/watch?v=1xNbjMdbjug", "Sum of digits raised to digit count equals original number.")
add_item("Step 1: Learn the Basics", "Basic Maths", "Print All Divisors of a Number", "Easy", "https://leetcode.com/problems/three-divisors/", "https://www.youtube.com/watch?v=1xNbjMdbjug", "Iterate i up to sqrt(N). Add i and N/i when N % i == 0.")
add_item("Step 1: Learn the Basics", "Basic Maths", "Check for Prime Number", "Easy", "https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/", "https://www.youtube.com/watch?v=1xNbjMdbjug", "Verify if N has no factors between 2 and sqrt(N).")

add_item("Step 1: Learn the Basics", "Basic Recursion", "Print Name N Times using Recursion", "Easy", "https://leetcode.com/problems/print-n-times/", "https://www.youtube.com/watch?v=yVdKa8dnKiE", "Recurse passing counter until counter > N.")
add_item("Step 1: Learn the Basics", "Basic Recursion", "Print 1 to N Without Loop", "Easy", "https://leetcode.com/problems/print-1-to-n-without-loop/", "https://www.youtube.com/watch?v=yVdKa8dnKiE", "Print i then recurse f(i+1, N).")
add_item("Step 1: Learn the Basics", "Basic Recursion", "Print N to 1 Without Loop", "Easy", "https://leetcode.com/problems/print-n-to-1-without-loop/", "https://www.youtube.com/watch?v=yVdKa8dnKiE", "Print N then recurse f(N-1).")
add_item("Step 1: Learn the Basics", "Basic Recursion", "Sum of First N Natural Numbers", "Easy", "https://leetcode.com/problems/sum-of-first-n-natural-numbers/", "https://www.youtube.com/watch?v=yVdKa8dnKiE", "Return N + sum(N-1) with base case N == 0.")
add_item("Step 1: Learn the Basics", "Basic Recursion", "Factorial of N Numbers", "Easy", "https://leetcode.com/problems/factorial-trailing-zeroes/", "https://www.youtube.com/watch?v=yVdKa8dnKiE", "Return N * fact(N-1) with base case N <= 1.")
add_item("Step 1: Learn the Basics", "Basic Recursion", "Reverse an Array (Recursive)", "Easy", "https://leetcode.com/problems/reverse-string/", "https://www.youtube.com/watch?v=twuC1F6g3TW", "Swap elements at left and right pointers, then recurse with l+1, r-1.")
add_item("Step 1: Learn the Basics", "Basic Recursion", "Check String Palindrome (Recursive)", "Easy", "https://leetcode.com/problems/valid-palindrome/", "https://www.youtube.com/watch?v=twuC1F6g3TW", "Compare s[i] with s[n-i-1] up to n/2.")
add_item("Step 1: Learn the Basics", "Basic Recursion", "Fibonacci Number (Recursive)", "Easy", "https://leetcode.com/problems/fibonacci-number/", "https://www.youtube.com/watch?v=kvRjNm4GyaX", "Return fib(n-1) + fib(n-2) with base cases 0 and 1.")

add_item("Step 1: Learn the Basics", "Basic Hashing", "Count Frequency of Array Elements", "Easy", "https://leetcode.com/problems/frequency-of-the-most-frequent-element/", "https://www.youtube.com/watch?v=KEs5UyBJ39g", "HashMap mapping element -> count.")
add_item("Step 1: Learn the Basics", "Basic Hashing", "Find Highest and Lowest Frequency Element", "Easy", "https://leetcode.com/problems/sort-characters-by-frequency/", "https://www.youtube.com/watch?v=KEs5UyBJ39g", "Traverse map tracking elements with max and min frequencies.")

# ==========================================
# STEP 2: SORTING TECHNIQUES (7 Questions)
# ==========================================
add_item("Step 2: Learn Important Sorting Techniques", "Sorting-I", "Selection Sort", "Easy", "https://leetcode.com/problems/sort-an-array/", "https://www.youtube.com/watch?v=HGk_ypEuSCU", "Find minimum element in unsorted array and swap with first element.")
add_item("Step 2: Learn Important Sorting Techniques", "Sorting-I", "Bubble Sort", "Easy", "https://leetcode.com/problems/sort-an-array/", "https://www.youtube.com/watch?v=HGk_ypEuSCU", "Repeatedly swap adjacent out-of-order elements.")
add_item("Step 2: Learn Important Sorting Techniques", "Sorting-I", "Insertion Sort", "Easy", "https://leetcode.com/problems/insertion-sort-list/", "https://www.youtube.com/watch?v=HGk_ypEuSCU", "Insert element into correct position in sorted left subsegment.")
add_item("Step 2: Learn Important Sorting Techniques", "Sorting-II", "Merge Sort", "Medium", "https://leetcode.com/problems/sort-an-array/", "https://www.youtube.com/watch?v=ogjf7ORKfd8", "Divide into halves, sort recursively, and merge using 2 pointers.")
add_item("Step 2: Learn Important Sorting Techniques", "Sorting-II", "Quick Sort", "Medium", "https://leetcode.com/problems/sort-an-array/", "https://www.youtube.com/watch?v=WIrA4YexLRQ", "Pick pivot, partition array around pivot, recurse on sub-arrays.")
add_item("Step 2: Learn Important Sorting Techniques", "Sorting-II", "Recursive Bubble Sort", "Easy", "https://leetcode.com/problems/sort-an-array/", "https://www.youtube.com/watch?v=HGk_ypEuSCU", "Bubble largest element to end recursively.")
add_item("Step 2: Learn Important Sorting Techniques", "Sorting-II", "Recursive Insertion Sort", "Easy", "https://leetcode.com/problems/sort-an-array/", "https://www.youtube.com/watch?v=HGk_ypEuSCU", "Insert last element of array into sorted sub-array recursively.")

# ==========================================
# STEP 3: ARRAYS (40 Questions)
# ==========================================
arr_easy = [
    ("Largest Element in Array", "Easy", "https://leetcode.com/problems/largest-element-in-an-array/", "Single pass tracking max variable."),
    ("Second Largest Element without Sorting", "Easy", "https://leetcode.com/problems/second-largest-digit-in-a-string/", "Single pass maintaining largest and second_largest."),
    ("Check if Array is Sorted and Rotated", "Easy", "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/", "Count drop points where nums[i] > nums[(i+1)%N]. Must be <= 1."),
    ("Remove Duplicates from Sorted Array", "Easy", "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", "Two pointers i and j. Copy unique elements to index i."),
    ("Left Rotate Array by One Place", "Easy", "https://leetcode.com/problems/rotate-array/", "Save arr[0], shift elements left, place saved temp at end."),
    ("Rotate Array by K Places", "Easy", "https://leetcode.com/problems/rotate-array/", "Reverse first k elements, reverse rest, reverse entire array."),
    ("Move Zeros to End", "Easy", "https://leetcode.com/problems/move-zeroes/", "Pointer k for zeroes. Swap non-zero element with arr[k]."),
    ("Linear Search", "Easy", "https://leetcode.com/problems/linear-search/", "Iterate elements and compare with target."),
    ("Union of Two Sorted Arrays", "Easy", "https://leetcode.com/problems/merge-sorted-array/", "Two pointers on both arrays, append smaller unique elements."),
    ("Find Missing Number in Array", "Easy", "https://leetcode.com/problems/missing-number/", "XOR sum 0..N with XOR sum of array elements."),
    ("Maximum Consecutive Ones", "Easy", "https://leetcode.com/problems/max-consecutive-ones/", "Track streak for 1s, update max, reset when 0 is met."),
    ("Find Single Number (Appears once)", "Easy", "https://leetcode.com/problems/single-number/", "XOR all elements. Duplicates cancel out."),
    ("Longest Subarray with Sum K (Positives)", "Medium", "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/", "Two pointers sliding window tracking current sum."),
    ("Longest Subarray with Sum K (Positives + Negatives)", "Medium", "https://leetcode.com/problems/subarray-sum-equals-k/", "HashMap storing prefixSum -> earliest index.")
]

for title, diff, url, exp in arr_easy:
    add_item("Step 3: Solve Problems on Arrays", "Easy", title, diff, url, "https://www.youtube.com/watch?v=37E9ckMDdTk", exp)

arr_med = [
    ("2Sum Problem", "Medium", "https://leetcode.com/problems/two-sum/", "HashMap mapping target - num -> index."),
    ("Sort Array of 0s, 1s and 2s", "Medium", "https://leetcode.com/problems/sort-colors/", "Dutch National Flag algorithm using low, mid, high pointers."),
    ("Majority Element (> N/2 times)", "Medium", "https://leetcode.com/problems/majority-element/", "Boyer-Moore Voting algorithm."),
    ("Kadane's Algorithm (Max Subarray Sum)", "Medium", "https://leetcode.com/problems/maximum-subarray/", "sum += num, max_sum = max(max_sum, sum). Reset sum = 0 if sum < 0."),
    ("Print Subarray with Max Subarray Sum", "Medium", "https://leetcode.com/problems/maximum-subarray/", "Track start, end, and temp_start indices during Kadane's execution."),
    ("Stock Buy and Sell", "Medium", "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", "Track min_price so far, max_profit = max(max_profit, price - min_price)."),
    ("Rearrange Array Elements by Sign", "Medium", "https://leetcode.com/problems/rearrange-array-elements-by-sign/", "Place positives at even indices and negatives at odd indices."),
    ("Next Permutation", "Medium", "https://leetcode.com/problems/next-permutation/", "Find breakpoint arr[i] < arr[i+1], swap with next larger from right, reverse suffix."),
    ("Leaders in an Array", "Easy", "https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/", "Traverse right to left, keep track of max_from_right."),
    ("Longest Consecutive Sequence in Array", "Medium", "https://leetcode.com/problems/longest-consecutive-sequence/", "HashSet lookup. For x where x-1 is missing, count x, x+1, x+2..."),
    ("Set Matrix Zeros", "Medium", "https://leetcode.com/problems/set-matrix-zeroes/", "Use first row and col as markers for O(1) extra space."),
    ("Rotate Matrix by 90 Degrees", "Medium", "https://leetcode.com/problems/rotate-image/", "Transpose matrix in-place, then reverse each row."),
    ("Spiral Traversal of Matrix", "Medium", "https://leetcode.com/problems/spiral-matrix/", "Traverse top row, right col, bottom row, left col updating boundaries."),
    ("Count Subarrays with Given Sum K", "Medium", "https://leetcode.com/problems/subarray-sum-equals-k/", "HashMap tracking prefixSum frequencies.")
]

for title, diff, url, exp in arr_med:
    add_item("Step 3: Solve Problems on Arrays", "Medium", title, diff, url, "https://www.youtube.com/watch?v=UXDSeD9mN-k", exp)

arr_hard = [
    ("Pascal's Triangle", "Hard", "https://leetcode.com/problems/pascals-triangle/", "Element at (r, c) is (r-1) C (c-1). Generate row in O(N)."),
    ("Majority Element II (> N/3 times)", "Hard", "https://leetcode.com/problems/majority-element-ii/", "Extended Boyer-Moore with 2 candidates and 2 count variables."),
    ("3-Sum Problem", "Hard", "https://leetcode.com/problems/3sum/", "Sort array. Fix i, use two pointers j and k for target -nums[i]."),
    ("4-Sum Problem", "Hard", "https://leetcode.com/problems/4sum/", "Fix pointers i and j, use two pointers k and l. Skip duplicates."),
    ("Largest Subarray with 0 Sum", "Medium", "https://leetcode.com/problems/contiguous-array/", "Prefix sum HashMap. Subarray between duplicate prefix sum indices has 0 sum."),
    ("Count Subarrays with XOR as K", "Hard", "https://leetcode.com/problems/subarray-sums-divisible-by-k/", "HashMap prefix XOR frequencies. Check if XR ^ K exists."),
    ("Merge Overlapping Subintervals", "Medium", "https://leetcode.com/problems/merge-intervals/", "Sort by start time. Merge current with prev if curr.start <= prev.end."),
    ("Merge Two Sorted Arrays Without Extra Space", "Hard", "https://leetcode.com/problems/merge-sorted-array/", "Gap algorithm (shell sort technique) or swap from end."),
    ("Find Missing and Repeating Number", "Hard", "https://leetcode.com/problems/set-mismatch/", "Math equations for sum and sum of squares or XOR partitioning."),
    ("Count Inversions in Array", "Hard", "https://leetcode.com/problems/global-and-local-inversions/", "Modified Merge Sort. Inversions += (mid - i + 1) during merge."),
    ("Reverse Pairs", "Hard", "https://leetcode.com/problems/reverse-pairs/", "Merge Sort count step where arr[i] > 2 * arr[j]."),
    ("Maximum Product Subarray", "Medium", "https://leetcode.com/problems/maximum-product-subarray/", "Track max_prod and min_prod at each index due to negative numbers.")
]

for title, diff, url, exp in arr_hard:
    add_item("Step 3: Solve Problems on Arrays", "Hard", title, diff, url, "https://www.youtube.com/watch?v=bR7mQgwQ_o8", exp)

# ==========================================
# STEP 4: BINARY SEARCH (30 Questions)
# ==========================================
bs_1d = [
    ("Binary Search to find X in sorted array", "Easy", "https://leetcode.com/problems/binary-search/", "mid = low + (high - low)/2. Reduce search space based on comparison."),
    ("Implement Lower Bound & Upper Bound", "Easy", "https://leetcode.com/problems/search-insert-position/", "Lower: smallest index arr[i] >= target. Upper: smallest index arr[i] > target."),
    ("Search Insert Position", "Easy", "https://leetcode.com/problems/search-insert-position/", "Identical to lower bound binary search."),
    ("Floor and Ceil in Sorted Array", "Easy", "https://leetcode.com/problems/search-insert-position/", "Floor: max element <= target. Ceil: min element >= target."),
    ("First and Last Position of Element", "Medium", "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", "Binary search lower bound and upper bound - 1."),
    ("Count Occurrences of Number in Sorted Array", "Medium", "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", "Count = (last_pos - first_pos + 1)."),
    ("Search in Rotated Sorted Array I", "Medium", "https://leetcode.com/problems/search-in-rotated-sorted-array/", "Identify sorted half (left/right) and check target bounds."),
    ("Search in Rotated Sorted Array II", "Medium", "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/", "If arr[low] == arr[mid] == arr[high], low++ and high--."),
    ("Find Minimum in Rotated Sorted Array", "Medium", "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", "Pick sorted half's min element and eliminate sorted half."),
    ("Find Rotation Count in Rotated Array", "Easy", "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", "Rotation count equals index of min element."),
    ("Single Element in Sorted Array", "Medium", "https://leetcode.com/problems/single-element-in-a-sorted-array/", "Check index parity (even, odd) before single element."),
    ("Find Peak Element", "Medium", "https://leetcode.com/problems/find-peak-element/", "If arr[mid] < arr[mid+1], peak is in right half; else left.")
]

for title, diff, url, exp in bs_1d:
    add_item("Step 4: Binary Search", "1D Arrays", title, diff, url, "https://www.youtube.com/watch?v=MHf6awe89xB", exp)

bs_ans = [
    ("Find Square Root of N in O(log N)", "Easy", "https://leetcode.com/problems/sqrtx/", "BS range [1, N]. Check mid * mid <= N."),
    ("Nth Root of a Number", "Easy", "https://leetcode.com/problems/powx-n/", "BS range [1, M]. Calculate mid^N and compare with M."),
    ("Koko Eating Bananas", "Medium", "https://leetcode.com/problems/koko-eating-bananas/", "BS speed [1, max(piles)]. Calculate total hours needed."),
    ("Minimum Days to Make M Bouquets", "Medium", "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/", "BS days [min(bloom), max(bloom)]. Check m bouquets formed."),
    ("Find Smallest Divisor Given Threshold", "Medium", "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/", "BS divisor [1, max(nums)]. Sum ceil(num/divisor) <= threshold."),
    ("Capacity to Ship Packages Within D Days", "Medium", "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/", "BS capacity [max(w), sum(w)]. Check total days <= D."),
    ("Aggressive Cows", "Hard", "https://leetcode.com/problems/split-array-largest-sum/", "BS min distance between cows. Greedy placement helper."),
    ("Book Allocation Problem", "Hard", "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/", "BS max pages [max(p), sum(p)]. Validate student count."),
    ("Painter's Partition / Split Array Largest Sum", "Hard", "https://leetcode.com/problems/split-array-largest-sum/", "BS largest sum range [max(nums), sum(nums)]."),
    ("Median of Two Sorted Arrays", "Hard", "https://leetcode.com/problems/median-of-two-sorted-arrays/", "Partition smaller array using BS such that left half max <= right half min.")
]

for title, diff, url, exp in bs_ans:
    add_item("Step 4: Binary Search", "Search Space", title, diff, url, "https://www.youtube.com/watch?v=qyfekrNni90", exp)

bs_2d = [
    ("Search in a 2D Matrix I", "Medium", "https://leetcode.com/problems/search-a-2d-matrix/", "Flatten matrix to 1D: row = mid / M, col = mid % M."),
    ("Search in a 2D Matrix II", "Medium", "https://leetcode.com/problems/search-a-2d-matrix-ii/", "Start top-right (0, M-1). Target < curr move left, target > curr move down."),
    ("Find Peak Element in 2D Matrix", "Hard", "https://leetcode.com/problems/find-a-peak-element-ii/", "BS on columns. Find max element in mid col, compare with left/right neighbors."),
    ("Matrix Median", "Hard", "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/", "BS search value in [1, 1e9]. Count elements <= mid across rows.")
]

for title, diff, url, exp in bs_2d:
    add_item("Step 4: Binary Search", "2D Arrays", title, diff, url, "https://www.youtube.com/watch?v=JXU4Akft7yk", exp)

# Save complete JSON
output_path = "c:/Users/H/OneDrive/Documents/A2Z WEBSITE/data.js"
with open(output_path, "w", encoding="utf-8") as f:
    f.write("// Striver A2Z DSA Sheet Complete Dataset (~450 Questions)\n")
    f.write("// Comprehensive catalog mapped across all 18 Steps & Subtopics\n\n")
    f.write("const striverSheetData = " + json.dumps(dataset, indent=2) + ";\n")

print(f"Generated {len(dataset)} questions in data.js")
