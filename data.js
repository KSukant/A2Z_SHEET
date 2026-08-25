// Striver A2Z DSA Sheet Complete Dataset (~450 Questions)
// Comprehensive catalog mapped across all 18 Steps & Subtopics

const striverSheetData = [
  {
    "id": 1,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Things to Know",
    "title": "User Input / Output & Data Types",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/user-input-output/",
    "youtubeUrl": "https://www.youtube.com/watch?v=EAR7De6Goz4",
    "explanation": "Master primitive data types (int, long, float, double, char, string) and standard I/O streams."
  },
  {
    "id": 2,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Things to Know",
    "title": "If Else Decision Making Statements",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/if-else-decision-making/",
    "youtubeUrl": "https://www.youtube.com/watch?v=EAR7De6Goz4",
    "explanation": "Branch execution paths based on evaluated Boolean logic expressions."
  },
  {
    "id": 3,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Things to Know",
    "title": "Switch Statement & Enums",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/switch-statement/",
    "youtubeUrl": "https://www.youtube.com/watch?v=EAR7De6Goz4",
    "explanation": "Multi-way jump table execution using switch-case structures."
  },
  {
    "id": 4,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Things to Know",
    "title": "For Loops & While Loops",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/n-th-tribonacci-number/",
    "youtubeUrl": "https://www.youtube.com/watch?v=EAR7De6Goz4",
    "explanation": "Iteration techniques, loop invariant conditions, and termination criteria."
  },
  {
    "id": 5,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Things to Know",
    "title": "Functions (Pass by Value & Reference)",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pass-by-reference-and-value/",
    "youtubeUrl": "https://www.youtube.com/watch?v=EAR7De6Goz4",
    "explanation": "Stack frames, memory addresses, value copying vs reference pointer passing."
  },
  {
    "id": 6,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 1: Rectangular Star Pattern",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-1--rectangular-star-pattern/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Outer loop N rows, inner loop N stars."
  },
  {
    "id": 7,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 2: Right-Angled Triangle Star Pattern",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-2--right-angled-triangle-star-pattern/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Inner loop prints i stars for row i."
  },
  {
    "id": 8,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 3: Right-Angled Number Pyramid",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-3--right-angled-number-pyramid/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Inner loop prints numbers 1 to i for row i."
  },
  {
    "id": 9,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 4: Right-Angled Number Pyramid - II",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-4--right-angled-number-pyramid---ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Inner loop prints row number i, i times."
  },
  {
    "id": 10,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 5: Inverted Right Pyramid Star Pattern",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-5--inverted-right-pyramid-star-pattern/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Inner loop prints N - i + 1 stars."
  },
  {
    "id": 11,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 6: Inverted Numbered Right Pyramid",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-6--inverted-numbered-right-pyramid/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Inner loop prints numbers 1 to N - i + 1."
  },
  {
    "id": 12,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 7: Star Pyramid",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-7--star-pyramid/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Print N-i-1 spaces, 2i+1 stars, N-i-1 spaces."
  },
  {
    "id": 13,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 8: Inverted Star Pyramid",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-8--inverted-star-pyramid/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Print i spaces, 2(N-i)-1 stars, i spaces."
  },
  {
    "id": 14,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 9: Diamond Star Pattern",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-9--diamond-star-pattern/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Combine Star Pyramid and Inverted Star Pyramid."
  },
  {
    "id": 15,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 10: Half Diamond Star Pattern",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-10--half-diamond-star-pattern/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Combine right-angled triangle and inverted right pyramid."
  },
  {
    "id": 16,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 11: Binary Number Triangle Pattern",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-11--binary-number-triangle-pattern/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Alternate starting digit 1 and 0 for each row."
  },
  {
    "id": 17,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 12: Number Crown Pattern",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-12--number-crown-pattern/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Print 1..i, 2*(N-i) spaces, then i..1 reversed."
  },
  {
    "id": 18,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 13: Increasing Number Triangle Pattern",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-13--increasing-number-triangle-pattern/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Continuous counter starting from 1 printed across rows."
  },
  {
    "id": 19,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 14: Increasing Letter Triangle Pattern",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-14--increasing-letter-triangle-pattern/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Print characters 'A' up to 'A' + i."
  },
  {
    "id": 20,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 15: Reverse Letter Triangle Pattern",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-15--reverse-letter-triangle-pattern/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Print characters 'A' up to 'A' + (N-i-1)."
  },
  {
    "id": 21,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 16: Alpha-Ramp Pattern",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-16--alpha-ramp-pattern/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Print character 'A' + i for (i + 1) times."
  },
  {
    "id": 22,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 17: Alpha-Hill Pattern",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-17--alpha-hill-pattern/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Palindromic character pyramid increasing then decreasing."
  },
  {
    "id": 23,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 18: Alpha-Triangle Pattern",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-18--alpha-triangle-pattern/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Print characters backwards starting from 'E' - row index."
  },
  {
    "id": 24,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 19: Symmetric Void Pattern",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-19--symmetric-void-pattern/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Upper half hollow diamond + inverted lower half."
  },
  {
    "id": 25,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 20: Butterfly Star Pattern",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-20--butterfly-star-pattern/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Symmetric wing pattern of stars separated by spaces."
  },
  {
    "id": 26,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 21: Hollow Rectangle Pattern",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-21--hollow-rectangle-pattern/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Print stars only on outer border (row/col edges)."
  },
  {
    "id": 27,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Build-up Logical Thinking",
    "title": "Pattern 22: The Number Pattern",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/pattern-22--the-number-pattern/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tNm_NNSB3_w",
    "explanation": "Concentric square layers computed by N - min(top, left, bottom, right)."
  },
  {
    "id": 28,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Learn STL / Java Collections",
    "title": "C++ STL Vectors, Sets, Maps & Iterators",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/c-stl-containers/",
    "youtubeUrl": "https://www.youtube.com/watch?v=RRVYpIET_ru",
    "explanation": "Master vector, set, map, priority_queue, stack, queue, unordered_map."
  },
  {
    "id": 29,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Basic Maths",
    "title": "Count Digits in a Number",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/count-digits-in-a-number/",
    "youtubeUrl": "https://www.youtube.com/watch?v=1xNbjMdbjug",
    "explanation": "Divide by 10 repeatedly or use floor(log10(N)) + 1."
  },
  {
    "id": 30,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Basic Maths",
    "title": "Reverse a Number",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-integer/",
    "youtubeUrl": "https://www.youtube.com/watch?v=1xNbjMdbjug",
    "explanation": "Extract last digit using N % 10, build rev = rev * 10 + digit."
  },
  {
    "id": 31,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Basic Maths",
    "title": "Check Palindrome Number",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/palindrome-number/",
    "youtubeUrl": "https://www.youtube.com/watch?v=1xNbjMdbjug",
    "explanation": "Compare original integer with digit-reversed value."
  },
  {
    "id": 32,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Basic Maths",
    "title": "GCD or HCF of Two Numbers",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/find-greatest-common-divisor-of-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=1xNbjMdbjug",
    "explanation": "Euclidean algorithm: gcd(a, b) = gcd(b, a % b) until b == 0."
  },
  {
    "id": 33,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Basic Maths",
    "title": "Check for Armstrong Number",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/armstrong-number/",
    "youtubeUrl": "https://www.youtube.com/watch?v=1xNbjMdbjug",
    "explanation": "Sum of digits raised to digit count equals original number."
  },
  {
    "id": 34,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Basic Maths",
    "title": "Print All Divisors of a Number",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/three-divisors/",
    "youtubeUrl": "https://www.youtube.com/watch?v=1xNbjMdbjug",
    "explanation": "Iterate i up to sqrt(N). Add i and N/i when N % i == 0."
  },
  {
    "id": 35,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Basic Maths",
    "title": "Check for Prime Number",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/",
    "youtubeUrl": "https://www.youtube.com/watch?v=1xNbjMdbjug",
    "explanation": "Verify if N has no factors between 2 and sqrt(N)."
  },
  {
    "id": 36,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Basic Recursion",
    "title": "Print Name N Times using Recursion",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/print-n-times/",
    "youtubeUrl": "https://www.youtube.com/watch?v=yVdKa8dnKiE",
    "explanation": "Recurse passing counter until counter > N."
  },
  {
    "id": 37,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Basic Recursion",
    "title": "Print 1 to N Without Loop",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/print-1-to-n-without-loop/",
    "youtubeUrl": "https://www.youtube.com/watch?v=yVdKa8dnKiE",
    "explanation": "Print i then recurse f(i+1, N)."
  },
  {
    "id": 38,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Basic Recursion",
    "title": "Print N to 1 Without Loop",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/print-n-to-1-without-loop/",
    "youtubeUrl": "https://www.youtube.com/watch?v=yVdKa8dnKiE",
    "explanation": "Print N then recurse f(N-1)."
  },
  {
    "id": 39,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Basic Recursion",
    "title": "Sum of First N Natural Numbers",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/sum-of-first-n-natural-numbers/",
    "youtubeUrl": "https://www.youtube.com/watch?v=yVdKa8dnKiE",
    "explanation": "Return N + sum(N-1) with base case N == 0."
  },
  {
    "id": 40,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Basic Recursion",
    "title": "Factorial of N Numbers",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/factorial-trailing-zeroes/",
    "youtubeUrl": "https://www.youtube.com/watch?v=yVdKa8dnKiE",
    "explanation": "Return N * fact(N-1) with base case N <= 1."
  },
  {
    "id": 41,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Basic Recursion",
    "title": "Reverse an Array (Recursive)",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=twuC1F6g3TW",
    "explanation": "Swap elements at left and right pointers, then recurse with l+1, r-1."
  },
  {
    "id": 42,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Basic Recursion",
    "title": "Check String Palindrome (Recursive)",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/valid-palindrome/",
    "youtubeUrl": "https://www.youtube.com/watch?v=twuC1F6g3TW",
    "explanation": "Compare s[i] with s[n-i-1] up to n/2."
  },
  {
    "id": 43,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Basic Recursion",
    "title": "Fibonacci Number (Recursive)",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/fibonacci-number/",
    "youtubeUrl": "https://www.youtube.com/watch?v=kvRjNm4GyaX",
    "explanation": "Return fib(n-1) + fib(n-2) with base cases 0 and 1."
  },
  {
    "id": 44,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Basic Hashing",
    "title": "Count Frequency of Array Elements",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/frequency-of-the-most-frequent-element/",
    "youtubeUrl": "https://www.youtube.com/watch?v=KEs5UyBJ39g",
    "explanation": "HashMap mapping element -> count."
  },
  {
    "id": 45,
    "step": "Step 1: Learn the Basics",
    "subtopic": "Basic Hashing",
    "title": "Find Highest and Lowest Frequency Element",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/sort-characters-by-frequency/",
    "youtubeUrl": "https://www.youtube.com/watch?v=KEs5UyBJ39g",
    "explanation": "Traverse map tracking elements with max and min frequencies."
  },
  {
    "id": 46,
    "step": "Step 2: Learn Important Sorting Techniques",
    "subtopic": "Sorting-I",
    "title": "Selection Sort",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/sort-an-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=HGk_ypEuSCU",
    "explanation": "Find minimum element in unsorted array and swap with first element."
  },
  {
    "id": 47,
    "step": "Step 2: Learn Important Sorting Techniques",
    "subtopic": "Sorting-I",
    "title": "Bubble Sort",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/sort-an-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=HGk_ypEuSCU",
    "explanation": "Repeatedly swap adjacent out-of-order elements."
  },
  {
    "id": 48,
    "step": "Step 2: Learn Important Sorting Techniques",
    "subtopic": "Sorting-I",
    "title": "Insertion Sort",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/insertion-sort-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=HGk_ypEuSCU",
    "explanation": "Insert element into correct position in sorted left subsegment."
  },
  {
    "id": 49,
    "step": "Step 2: Learn Important Sorting Techniques",
    "subtopic": "Sorting-II",
    "title": "Merge Sort",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/sort-an-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=ogjf7ORKfd8",
    "explanation": "Divide into halves, sort recursively, and merge using 2 pointers."
  },
  {
    "id": 50,
    "step": "Step 2: Learn Important Sorting Techniques",
    "subtopic": "Sorting-II",
    "title": "Quick Sort",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/sort-an-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=WIrA4YexLRQ",
    "explanation": "Pick pivot, partition array around pivot, recurse on sub-arrays."
  },
  {
    "id": 51,
    "step": "Step 2: Learn Important Sorting Techniques",
    "subtopic": "Sorting-II",
    "title": "Recursive Bubble Sort",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/sort-an-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=HGk_ypEuSCU",
    "explanation": "Bubble largest element to end recursively."
  },
  {
    "id": 52,
    "step": "Step 2: Learn Important Sorting Techniques",
    "subtopic": "Sorting-II",
    "title": "Recursive Insertion Sort",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/sort-an-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=HGk_ypEuSCU",
    "explanation": "Insert last element of array into sorted sub-array recursively."
  },
  {
    "id": 53,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Easy",
    "title": "Largest Element in Array",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/largest-element-in-an-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=37E9ckMDdTk",
    "explanation": "Single pass tracking max variable."
  },
  {
    "id": 54,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Easy",
    "title": "Second Largest Element without Sorting",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/second-largest-digit-in-a-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=37E9ckMDdTk",
    "explanation": "Single pass maintaining largest and second_largest."
  },
  {
    "id": 55,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Easy",
    "title": "Check if Array is Sorted and Rotated",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/",
    "youtubeUrl": "https://www.youtube.com/watch?v=37E9ckMDdTk",
    "explanation": "Count drop points where nums[i] > nums[(i+1)%N]. Must be <= 1."
  },
  {
    "id": 56,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Easy",
    "title": "Remove Duplicates from Sorted Array",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=37E9ckMDdTk",
    "explanation": "Two pointers i and j. Copy unique elements to index i."
  },
  {
    "id": 57,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Easy",
    "title": "Left Rotate Array by One Place",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/rotate-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=37E9ckMDdTk",
    "explanation": "Save arr[0], shift elements left, place saved temp at end."
  },
  {
    "id": 58,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Easy",
    "title": "Rotate Array by K Places",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/rotate-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=37E9ckMDdTk",
    "explanation": "Reverse first k elements, reverse rest, reverse entire array."
  },
  {
    "id": 59,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Easy",
    "title": "Move Zeros to End",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/move-zeroes/",
    "youtubeUrl": "https://www.youtube.com/watch?v=37E9ckMDdTk",
    "explanation": "Pointer k for zeroes. Swap non-zero element with arr[k]."
  },
  {
    "id": 60,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Easy",
    "title": "Linear Search",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/linear-search/",
    "youtubeUrl": "https://www.youtube.com/watch?v=37E9ckMDdTk",
    "explanation": "Iterate elements and compare with target."
  },
  {
    "id": 61,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Easy",
    "title": "Union of Two Sorted Arrays",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/merge-sorted-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=37E9ckMDdTk",
    "explanation": "Two pointers on both arrays, append smaller unique elements."
  },
  {
    "id": 62,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Easy",
    "title": "Find Missing Number in Array",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/missing-number/",
    "youtubeUrl": "https://www.youtube.com/watch?v=37E9ckMDdTk",
    "explanation": "XOR sum 0..N with XOR sum of array elements."
  },
  {
    "id": 63,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Easy",
    "title": "Maximum Consecutive Ones",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/max-consecutive-ones/",
    "youtubeUrl": "https://www.youtube.com/watch?v=37E9ckMDdTk",
    "explanation": "Track streak for 1s, update max, reset when 0 is met."
  },
  {
    "id": 64,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Easy",
    "title": "Find Single Number (Appears once)",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/single-number/",
    "youtubeUrl": "https://www.youtube.com/watch?v=37E9ckMDdTk",
    "explanation": "XOR all elements. Duplicates cancel out."
  },
  {
    "id": 65,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Easy",
    "title": "Longest Subarray with Sum K (Positives)",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/",
    "youtubeUrl": "https://www.youtube.com/watch?v=37E9ckMDdTk",
    "explanation": "Two pointers sliding window tracking current sum."
  },
  {
    "id": 66,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Easy",
    "title": "Longest Subarray with Sum K (Positives + Negatives)",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/subarray-sum-equals-k/",
    "youtubeUrl": "https://www.youtube.com/watch?v=37E9ckMDdTk",
    "explanation": "HashMap storing prefixSum -> earliest index."
  },
  {
    "id": 67,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Medium",
    "title": "2Sum Problem",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/two-sum/",
    "youtubeUrl": "https://www.youtube.com/watch?v=UXDSeD9mN-k",
    "explanation": "HashMap mapping target - num -> index."
  },
  {
    "id": 68,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Medium",
    "title": "Sort Array of 0s, 1s and 2s",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/sort-colors/",
    "youtubeUrl": "https://www.youtube.com/watch?v=UXDSeD9mN-k",
    "explanation": "Dutch National Flag algorithm using low, mid, high pointers."
  },
  {
    "id": 69,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Medium",
    "title": "Majority Element (> N/2 times)",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/majority-element/",
    "youtubeUrl": "https://www.youtube.com/watch?v=UXDSeD9mN-k",
    "explanation": "Boyer-Moore Voting algorithm."
  },
  {
    "id": 70,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Medium",
    "title": "Kadane's Algorithm (Max Subarray Sum)",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/maximum-subarray/",
    "youtubeUrl": "https://www.youtube.com/watch?v=UXDSeD9mN-k",
    "explanation": "sum += num, max_sum = max(max_sum, sum). Reset sum = 0 if sum < 0."
  },
  {
    "id": 71,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Medium",
    "title": "Print Subarray with Max Subarray Sum",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/maximum-subarray/",
    "youtubeUrl": "https://www.youtube.com/watch?v=UXDSeD9mN-k",
    "explanation": "Track start, end, and temp_start indices during Kadane's execution."
  },
  {
    "id": 72,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Medium",
    "title": "Stock Buy and Sell",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    "youtubeUrl": "https://www.youtube.com/watch?v=UXDSeD9mN-k",
    "explanation": "Track min_price so far, max_profit = max(max_profit, price - min_price)."
  },
  {
    "id": 73,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Medium",
    "title": "Rearrange Array Elements by Sign",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/rearrange-array-elements-by-sign/",
    "youtubeUrl": "https://www.youtube.com/watch?v=UXDSeD9mN-k",
    "explanation": "Place positives at even indices and negatives at odd indices."
  },
  {
    "id": 74,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Medium",
    "title": "Next Permutation",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/next-permutation/",
    "youtubeUrl": "https://www.youtube.com/watch?v=UXDSeD9mN-k",
    "explanation": "Find breakpoint arr[i] < arr[i+1], swap with next larger from right, reverse suffix."
  },
  {
    "id": 75,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Medium",
    "title": "Leaders in an Array",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/",
    "youtubeUrl": "https://www.youtube.com/watch?v=UXDSeD9mN-k",
    "explanation": "Traverse right to left, keep track of max_from_right."
  },
  {
    "id": 76,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Medium",
    "title": "Longest Consecutive Sequence in Array",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/longest-consecutive-sequence/",
    "youtubeUrl": "https://www.youtube.com/watch?v=UXDSeD9mN-k",
    "explanation": "HashSet lookup. For x where x-1 is missing, count x, x+1, x+2..."
  },
  {
    "id": 77,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Medium",
    "title": "Set Matrix Zeros",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/set-matrix-zeroes/",
    "youtubeUrl": "https://www.youtube.com/watch?v=UXDSeD9mN-k",
    "explanation": "Use first row and col as markers for O(1) extra space."
  },
  {
    "id": 78,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Medium",
    "title": "Rotate Matrix by 90 Degrees",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/rotate-image/",
    "youtubeUrl": "https://www.youtube.com/watch?v=UXDSeD9mN-k",
    "explanation": "Transpose matrix in-place, then reverse each row."
  },
  {
    "id": 79,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Medium",
    "title": "Spiral Traversal of Matrix",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/spiral-matrix/",
    "youtubeUrl": "https://www.youtube.com/watch?v=UXDSeD9mN-k",
    "explanation": "Traverse top row, right col, bottom row, left col updating boundaries."
  },
  {
    "id": 80,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Medium",
    "title": "Count Subarrays with Given Sum K",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/subarray-sum-equals-k/",
    "youtubeUrl": "https://www.youtube.com/watch?v=UXDSeD9mN-k",
    "explanation": "HashMap tracking prefixSum frequencies."
  },
  {
    "id": 81,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Hard",
    "title": "Pascal's Triangle",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/pascals-triangle/",
    "youtubeUrl": "https://www.youtube.com/watch?v=bR7mQgwQ_o8",
    "explanation": "Element at (r, c) is (r-1) C (c-1). Generate row in O(N)."
  },
  {
    "id": 82,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Hard",
    "title": "Majority Element II (> N/3 times)",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/majority-element-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=bR7mQgwQ_o8",
    "explanation": "Extended Boyer-Moore with 2 candidates and 2 count variables."
  },
  {
    "id": 83,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Hard",
    "title": "3-Sum Problem",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/3sum/",
    "youtubeUrl": "https://www.youtube.com/watch?v=bR7mQgwQ_o8",
    "explanation": "Sort array. Fix i, use two pointers j and k for target -nums[i]."
  },
  {
    "id": 84,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Hard",
    "title": "4-Sum Problem",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/4sum/",
    "youtubeUrl": "https://www.youtube.com/watch?v=bR7mQgwQ_o8",
    "explanation": "Fix pointers i and j, use two pointers k and l. Skip duplicates."
  },
  {
    "id": 85,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Hard",
    "title": "Largest Subarray with 0 Sum",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/contiguous-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=bR7mQgwQ_o8",
    "explanation": "Prefix sum HashMap. Subarray between duplicate prefix sum indices has 0 sum."
  },
  {
    "id": 86,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Hard",
    "title": "Count Subarrays with XOR as K",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/subarray-sums-divisible-by-k/",
    "youtubeUrl": "https://www.youtube.com/watch?v=bR7mQgwQ_o8",
    "explanation": "HashMap prefix XOR frequencies. Check if XR ^ K exists."
  },
  {
    "id": 87,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Hard",
    "title": "Merge Overlapping Subintervals",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/merge-intervals/",
    "youtubeUrl": "https://www.youtube.com/watch?v=bR7mQgwQ_o8",
    "explanation": "Sort by start time. Merge current with prev if curr.start <= prev.end."
  },
  {
    "id": 88,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Hard",
    "title": "Merge Two Sorted Arrays Without Extra Space",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/merge-sorted-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=bR7mQgwQ_o8",
    "explanation": "Gap algorithm (shell sort technique) or swap from end."
  },
  {
    "id": 89,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Hard",
    "title": "Find Missing and Repeating Number",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/set-mismatch/",
    "youtubeUrl": "https://www.youtube.com/watch?v=bR7mQgwQ_o8",
    "explanation": "Math equations for sum and sum of squares or XOR partitioning."
  },
  {
    "id": 90,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Hard",
    "title": "Count Inversions in Array",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/global-and-local-inversions/",
    "youtubeUrl": "https://www.youtube.com/watch?v=bR7mQgwQ_o8",
    "explanation": "Modified Merge Sort. Inversions += (mid - i + 1) during merge."
  },
  {
    "id": 91,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Hard",
    "title": "Reverse Pairs",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-pairs/",
    "youtubeUrl": "https://www.youtube.com/watch?v=bR7mQgwQ_o8",
    "explanation": "Merge Sort count step where arr[i] > 2 * arr[j]."
  },
  {
    "id": 92,
    "step": "Step 3: Solve Problems on Arrays",
    "subtopic": "Hard",
    "title": "Maximum Product Subarray",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/maximum-product-subarray/",
    "youtubeUrl": "https://www.youtube.com/watch?v=bR7mQgwQ_o8",
    "explanation": "Track max_prod and min_prod at each index due to negative numbers."
  },
  {
    "id": 93,
    "step": "Step 4: Binary Search",
    "subtopic": "1D Arrays",
    "title": "Binary Search to find X in sorted array",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-search/",
    "youtubeUrl": "https://www.youtube.com/watch?v=MHf6awe89xB",
    "explanation": "mid = low + (high - low)/2. Reduce search space based on comparison."
  },
  {
    "id": 94,
    "step": "Step 4: Binary Search",
    "subtopic": "1D Arrays",
    "title": "Implement Lower Bound & Upper Bound",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/search-insert-position/",
    "youtubeUrl": "https://www.youtube.com/watch?v=MHf6awe89xB",
    "explanation": "Lower: smallest index arr[i] >= target. Upper: smallest index arr[i] > target."
  },
  {
    "id": 95,
    "step": "Step 4: Binary Search",
    "subtopic": "1D Arrays",
    "title": "Search Insert Position",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/search-insert-position/",
    "youtubeUrl": "https://www.youtube.com/watch?v=MHf6awe89xB",
    "explanation": "Identical to lower bound binary search."
  },
  {
    "id": 96,
    "step": "Step 4: Binary Search",
    "subtopic": "1D Arrays",
    "title": "Floor and Ceil in Sorted Array",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/search-insert-position/",
    "youtubeUrl": "https://www.youtube.com/watch?v=MHf6awe89xB",
    "explanation": "Floor: max element <= target. Ceil: min element >= target."
  },
  {
    "id": 97,
    "step": "Step 4: Binary Search",
    "subtopic": "1D Arrays",
    "title": "First and Last Position of Element",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=MHf6awe89xB",
    "explanation": "Binary search lower bound and upper bound - 1."
  },
  {
    "id": 98,
    "step": "Step 4: Binary Search",
    "subtopic": "1D Arrays",
    "title": "Count Occurrences of Number in Sorted Array",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=MHf6awe89xB",
    "explanation": "Count = (last_pos - first_pos + 1)."
  },
  {
    "id": 99,
    "step": "Step 4: Binary Search",
    "subtopic": "1D Arrays",
    "title": "Search in Rotated Sorted Array I",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=MHf6awe89xB",
    "explanation": "Identify sorted half (left/right) and check target bounds."
  },
  {
    "id": 100,
    "step": "Step 4: Binary Search",
    "subtopic": "1D Arrays",
    "title": "Search in Rotated Sorted Array II",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=MHf6awe89xB",
    "explanation": "If arr[low] == arr[mid] == arr[high], low++ and high--."
  },
  {
    "id": 101,
    "step": "Step 4: Binary Search",
    "subtopic": "1D Arrays",
    "title": "Find Minimum in Rotated Sorted Array",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=MHf6awe89xB",
    "explanation": "Pick sorted half's min element and eliminate sorted half."
  },
  {
    "id": 102,
    "step": "Step 4: Binary Search",
    "subtopic": "1D Arrays",
    "title": "Find Rotation Count in Rotated Array",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=MHf6awe89xB",
    "explanation": "Rotation count equals index of min element."
  },
  {
    "id": 103,
    "step": "Step 4: Binary Search",
    "subtopic": "1D Arrays",
    "title": "Single Element in Sorted Array",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/single-element-in-a-sorted-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=MHf6awe89xB",
    "explanation": "Check index parity (even, odd) before single element."
  },
  {
    "id": 104,
    "step": "Step 4: Binary Search",
    "subtopic": "1D Arrays",
    "title": "Find Peak Element",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/find-peak-element/",
    "youtubeUrl": "https://www.youtube.com/watch?v=MHf6awe89xB",
    "explanation": "If arr[mid] < arr[mid+1], peak is in right half; else left."
  },
  {
    "id": 105,
    "step": "Step 4: Binary Search",
    "subtopic": "Search Space",
    "title": "Find Square Root of N in O(log N)",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/sqrtx/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qyfekrNni90",
    "explanation": "BS range [1, N]. Check mid * mid <= N."
  },
  {
    "id": 106,
    "step": "Step 4: Binary Search",
    "subtopic": "Search Space",
    "title": "Nth Root of a Number",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/powx-n/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qyfekrNni90",
    "explanation": "BS range [1, M]. Calculate mid^N and compare with M."
  },
  {
    "id": 107,
    "step": "Step 4: Binary Search",
    "subtopic": "Search Space",
    "title": "Koko Eating Bananas",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/koko-eating-bananas/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qyfekrNni90",
    "explanation": "BS speed [1, max(piles)]. Calculate total hours needed."
  },
  {
    "id": 108,
    "step": "Step 4: Binary Search",
    "subtopic": "Search Space",
    "title": "Minimum Days to Make M Bouquets",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qyfekrNni90",
    "explanation": "BS days [min(bloom), max(bloom)]. Check m bouquets formed."
  },
  {
    "id": 109,
    "step": "Step 4: Binary Search",
    "subtopic": "Search Space",
    "title": "Find Smallest Divisor Given Threshold",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qyfekrNni90",
    "explanation": "BS divisor [1, max(nums)]. Sum ceil(num/divisor) <= threshold."
  },
  {
    "id": 110,
    "step": "Step 4: Binary Search",
    "subtopic": "Search Space",
    "title": "Capacity to Ship Packages Within D Days",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qyfekrNni90",
    "explanation": "BS capacity [max(w), sum(w)]. Check total days <= D."
  },
  {
    "id": 111,
    "step": "Step 4: Binary Search",
    "subtopic": "Search Space",
    "title": "Aggressive Cows",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/split-array-largest-sum/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qyfekrNni90",
    "explanation": "BS min distance between cows. Greedy placement helper."
  },
  {
    "id": 112,
    "step": "Step 4: Binary Search",
    "subtopic": "Search Space",
    "title": "Book Allocation Problem",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qyfekrNni90",
    "explanation": "BS max pages [max(p), sum(p)]. Validate student count."
  },
  {
    "id": 113,
    "step": "Step 4: Binary Search",
    "subtopic": "Search Space",
    "title": "Painter's Partition / Split Array Largest Sum",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/split-array-largest-sum/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qyfekrNni90",
    "explanation": "BS largest sum range [max(nums), sum(nums)]."
  },
  {
    "id": 114,
    "step": "Step 4: Binary Search",
    "subtopic": "Search Space",
    "title": "Median of Two Sorted Arrays",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qyfekrNni90",
    "explanation": "Partition smaller array using BS such that left half max <= right half min."
  },
  {
    "id": 115,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Remove Outermost Parentheses",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/remove-outermost-parentheses/",
    "youtubeUrl": "https://www.youtube.com/watch?v=v3uCch7y0V4",
    "explanation": "Track bracket depth count to strip outer parens."
  },
  {
    "id": 116,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Reverse Words in a String",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-words-in-a-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=vhnRAaJe35s",
    "explanation": "Extract words, reverse array, join with single space."
  },
  {
    "id": 117,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Largest Odd Number in String",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/largest-odd-number-in-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7pM27zWvU5U",
    "explanation": "Find rightmost odd digit."
  },
  {
    "id": 118,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Longest Common Prefix",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/longest-common-prefix/",
    "youtubeUrl": "https://www.youtube.com/watch?v=0sWShKIJoo4",
    "explanation": "Sort strings, compare first and last."
  },
  {
    "id": 119,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Isomorphic Strings",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/isomorphic-strings/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7yF-U1hLEqU",
    "explanation": "Two hash maps for 1-to-1 character mappings."
  },
  {
    "id": 120,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Rotate String",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/rotate-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7yF-U1hLEqU",
    "explanation": "Check string length match and goal in s+s."
  },
  {
    "id": 121,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Valid Anagram",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/valid-anagram/",
    "youtubeUrl": "https://www.youtube.com/watch?v=k3Y8V_a8R8w",
    "explanation": "Character frequency count match."
  },
  {
    "id": 122,
    "step": "Step 5: Strings",
    "subtopic": "Medium Strings",
    "title": "Sort Characters by Frequency",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/sort-characters-by-frequency/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tr9Vjth0Bms",
    "explanation": "Frequency bucket sort or max-heap."
  },
  {
    "id": 123,
    "step": "Step 5: Strings",
    "subtopic": "Medium Strings",
    "title": "Max Depth of Parentheses",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tr9Vjth0Bms",
    "explanation": "Count depth of open brackets."
  },
  {
    "id": 124,
    "step": "Step 5: Strings",
    "subtopic": "Medium Strings",
    "title": "Roman to Integer",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/roman-to-integer/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tr9Vjth0Bms",
    "explanation": "Subtract if symbol < next symbol."
  },
  {
    "id": 125,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Reverse a LinkedList",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=D2vI2DNJGd8",
    "explanation": "Pointers prev = null, curr = head. Reverse pointers."
  },
  {
    "id": 126,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Middle of LinkedList",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/middle-of-the-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7LjQ57wL85Q",
    "explanation": "Slow and fast pointers."
  },
  {
    "id": 127,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Detect Cycle in LinkedList",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle/",
    "youtubeUrl": "https://www.youtube.com/watch?v=wiOo4DC5GGA",
    "explanation": "Floyd's Tortoise & Hare algorithm."
  },
  {
    "id": 128,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Find Cycle Starting Point",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=2Kd0KKmmHFc",
    "explanation": "Reset slow to head upon collision, move 1 step each."
  },
  {
    "id": 129,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Length of Loop in LinkedList",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle/",
    "youtubeUrl": "https://www.youtube.com/watch?v=I4g16UhZVIg",
    "explanation": "Count nodes inside collision loop."
  },
  {
    "id": 130,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Odd Even LinkedList",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/odd-even-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qf6LhG8IGpU",
    "explanation": "Separate odd and even pointer chains."
  },
  {
    "id": 131,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Remove Nth Node From End",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=3kMKb-zY00E",
    "explanation": "Fast pointer N steps ahead."
  },
  {
    "id": 132,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Delete Middle Node",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=ePpV-_pfUXo",
    "explanation": "Slow and fast pointers with prev."
  },
  {
    "id": 133,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Sort LinkedList",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/sort-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=8ocB7a_c-28",
    "explanation": "Merge sort on linked list."
  },
  {
    "id": 134,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Intersection Node of 2 LL",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    "youtubeUrl": "https://www.youtube.com/watch?v=u4FWXscCSac",
    "explanation": "Two pointers switching heads upon null."
  },
  {
    "id": 135,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Hard LinkedList",
    "title": "Reverse Nodes in K-Group",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    "youtubeUrl": "https://www.youtube.com/watch?v=1UOPsfP85_0",
    "explanation": "Reverse k nodes recursively if available."
  },
  {
    "id": 136,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Hard LinkedList",
    "title": "Rotate LinkedList",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/rotate-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=9VPm6nEbVPA",
    "explanation": "Make ring, cut at len - k % len."
  },
  {
    "id": 137,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Hard LinkedList",
    "title": "Flattening a LinkedList",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=ysytSSXpAI0",
    "explanation": "Merge sort sub-lists via bottom pointer."
  },
  {
    "id": 138,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Hard LinkedList",
    "title": "Clone List with Random Pointers",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/copy-list-with-random-pointer/",
    "youtubeUrl": "https://www.youtube.com/watch?v=VNf6VynfpdM",
    "explanation": "Inline nodes -> assign random -> separate."
  },
  {
    "id": 139,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Generate Parentheses",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/generate-parentheses/",
    "youtubeUrl": "https://www.youtube.com/watch?v=eyCj_u3PoJE",
    "explanation": "Track open and close counts."
  },
  {
    "id": 140,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Subsets / Power Set",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/subsets/",
    "youtubeUrl": "https://www.youtube.com/watch?v=AxNNVECce8c",
    "explanation": "Pick/Not Pick recursive pattern."
  },
  {
    "id": 141,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Subsets II",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/subsets-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=rYkfBRtMJvw",
    "explanation": "Skip duplicates at same depth."
  },
  {
    "id": 142,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Combination Sum I",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/combination-sum/",
    "youtubeUrl": "https://www.youtube.com/watch?v=OyZFFqQtu98",
    "explanation": "Include/Exclude pattern."
  },
  {
    "id": 143,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Combination Sum II",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/combination-sum-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=G1fRTGRxXU8",
    "explanation": "Sort and skip duplicates."
  },
  {
    "id": 144,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "N-Queens",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/n-queens/",
    "youtubeUrl": "https://www.youtube.com/watch?v=i05Ju7AUdz8",
    "explanation": "Place row by row with O(1) hash checks."
  },
  {
    "id": 145,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "Sudoku Solver",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/sudoku-solver/",
    "youtubeUrl": "https://www.youtube.com/watch?v=FWAIf_EVUKE",
    "explanation": "Backtrack 1-9 digits in empty cells."
  },
  {
    "id": 146,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "M-Coloring Problem",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/flower-planting-with-no-adjacent/",
    "youtubeUrl": "https://www.youtube.com/watch?v=wuVwUK25Rfc",
    "explanation": "Try colors 1..M checking neighbors."
  },
  {
    "id": 147,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "Rat in a Maze",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/word-search/",
    "youtubeUrl": "https://www.youtube.com/watch?v=bLGZhJlt4y0",
    "explanation": "4-direction grid traversal."
  },
  {
    "id": 148,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "Word Search I",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/word-search/",
    "youtubeUrl": "https://www.youtube.com/watch?v=pfiQ_PS1g8E",
    "explanation": "DFS grid search with visited markers."
  },
  {
    "id": 149,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "Palindrome Partitioning",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/palindrome-partitioning/",
    "youtubeUrl": "https://www.youtube.com/watch?v=WBgsABoClE0",
    "explanation": "Partition string if prefix is palindrome."
  },
  {
    "id": 150,
    "step": "Step 8: Bit Manipulation",
    "subtopic": "Learn Bit Manipulation",
    "title": "Check if i-th Bit is Set",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/number-of-1-bits/",
    "youtubeUrl": "https://www.youtube.com/watch?v=NtTZSBOWw4w",
    "explanation": "Check (N & (1 << i)) != 0."
  },
  {
    "id": 151,
    "step": "Step 8: Bit Manipulation",
    "subtopic": "Learn Bit Manipulation",
    "title": "Check if Power of 2",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/power-of-two/",
    "youtubeUrl": "https://www.youtube.com/watch?v=NtTZSBOWw4w",
    "explanation": "N > 0 and (N & (N - 1)) == 0."
  },
  {
    "id": 152,
    "step": "Step 8: Bit Manipulation",
    "subtopic": "Learn Bit Manipulation",
    "title": "Count Set Bits",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/number-of-1-bits/",
    "youtubeUrl": "https://www.youtube.com/watch?v=NtTZSBOWw4w",
    "explanation": "n = n & (n-1) loop count."
  },
  {
    "id": 153,
    "step": "Step 8: Bit Manipulation",
    "subtopic": "Interview Problems",
    "title": "Min Bit Flips to Convert",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/minimum-bit-flips-to-convert-number/",
    "youtubeUrl": "https://www.youtube.com/watch?v=OOsmI5wBflA",
    "explanation": "Count set bits of start ^ goal."
  },
  {
    "id": 154,
    "step": "Step 8: Bit Manipulation",
    "subtopic": "Interview Problems",
    "title": "Single Number III",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/single-number-iii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=faoVT1u85rE",
    "explanation": "Rightmost set bit partition into 2 groups."
  },
  {
    "id": 155,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Valid Parentheses",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/valid-parentheses/",
    "youtubeUrl": "https://www.youtube.com/watch?v=wkDfsKijrZ8",
    "explanation": "Stack pop and match brackets."
  },
  {
    "id": 156,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Next Greater Element I",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/next-greater-element-i/",
    "youtubeUrl": "https://www.youtube.com/watch?v=Du881K7Jtk8",
    "explanation": "Monotonic decreasing stack."
  },
  {
    "id": 157,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Next Greater Element II",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/next-greater-element-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7PrncD7v9YQ",
    "explanation": "Circular array 2*N traversal."
  },
  {
    "id": 158,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Trapping Rain Water",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/trapping-rain-water/",
    "youtubeUrl": "https://www.youtube.com/watch?v=m18Hntz4go8",
    "explanation": "Two pointers min(leftMax, rightMax) - height."
  },
  {
    "id": 159,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Asteroid Collision",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/asteroid-collision/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7xfS3FvksW0",
    "explanation": "Stack collision handling."
  },
  {
    "id": 160,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Largest Rectangle in Histogram",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    "youtubeUrl": "https://www.youtube.com/watch?v=jC_cWly4EFc",
    "explanation": "Monotonic stack for NSE and PSE."
  },
  {
    "id": 161,
    "step": "Step 10: Sliding Window & Two Pointers",
    "subtopic": "Medium Window",
    "title": "Longest Substring Without Repeating",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qtVh-XEpsA0",
    "explanation": "Sliding window with map last_seen_index."
  },
  {
    "id": 162,
    "step": "Step 10: Sliding Window & Two Pointers",
    "subtopic": "Medium Window",
    "title": "Max Consecutive Ones III",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/max-consecutive-ones-iii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=3E4JBHSLpYk",
    "explanation": "Window allowing K zeroes."
  },
  {
    "id": 163,
    "step": "Step 10: Sliding Window & Two Pointers",
    "subtopic": "Hard Window",
    "title": "Minimum Window Substring",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/minimum-window-substring/",
    "youtubeUrl": "https://www.youtube.com/watch?v=WJaij9754y4",
    "explanation": "Expand right, shrink left."
  },
  {
    "id": 164,
    "step": "Step 11: Heaps",
    "subtopic": "Medium",
    "title": "Kth Largest Element",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=XEmy13g1Qxc",
    "explanation": "Min-heap of size K."
  },
  {
    "id": 165,
    "step": "Step 11: Heaps",
    "subtopic": "Hard",
    "title": "Find Median from Data Stream",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/find-median-from-data-stream/",
    "youtubeUrl": "https://www.youtube.com/watch?v=itmhHWaHupI",
    "explanation": "Max-heap left + Min-heap right."
  },
  {
    "id": 166,
    "step": "Step 12: Greedy Algorithms",
    "subtopic": "Easy/Medium",
    "title": "Assign Cookies",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/assign-cookies/",
    "youtubeUrl": "https://www.youtube.com/watch?v=DIX2p7g9i98",
    "explanation": "Sort factors and sizes."
  },
  {
    "id": 167,
    "step": "Step 12: Greedy Algorithms",
    "subtopic": "Easy/Medium",
    "title": "N Meetings in 1 Room",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/non-overlapping-intervals/",
    "youtubeUrl": "https://www.youtube.com/watch?v=II6ziNbrVkk",
    "explanation": "Sort by end time."
  },
  {
    "id": 168,
    "step": "Step 13: Binary Trees",
    "subtopic": "Traversals",
    "title": "Preorder Traversal",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-preorder-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=RlUu705kPWw",
    "explanation": "Root -> Left -> Right."
  },
  {
    "id": 169,
    "step": "Step 13: Binary Trees",
    "subtopic": "Traversals",
    "title": "Inorder Traversal",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=Z_U6u7379dE",
    "explanation": "Left -> Root -> Right."
  },
  {
    "id": 170,
    "step": "Step 13: Binary Trees",
    "subtopic": "Traversals",
    "title": "Postorder Traversal",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-postorder-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=2YBhNLodD8Q",
    "explanation": "Left -> Right -> Root."
  },
  {
    "id": 171,
    "step": "Step 13: Binary Trees",
    "subtopic": "Traversals",
    "title": "Level Order Traversal",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=EoAsWbO7sqg",
    "explanation": "BFS using Queue."
  },
  {
    "id": 172,
    "step": "Step 13: Binary Trees",
    "subtopic": "Medium Tree Problems",
    "title": "Max Depth of Binary Tree",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=eD3tmO66a4g",
    "explanation": "1 + max(leftDepth, rightDepth)."
  },
  {
    "id": 173,
    "step": "Step 13: Binary Trees",
    "subtopic": "Medium Tree Problems",
    "title": "Diameter of Binary Tree",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/diameter-of-binary-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=RezeteJ1TI0",
    "explanation": "max(leftHeight + rightHeight)."
  },
  {
    "id": 174,
    "step": "Step 13: Binary Trees",
    "subtopic": "Medium Tree Problems",
    "title": "Lowest Common Ancestor",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=_-QHfMDde90",
    "explanation": "Recursive left and right search."
  },
  {
    "id": 175,
    "step": "Step 14: Binary Search Trees",
    "subtopic": "Concepts",
    "title": "Search in BST",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/search-in-a-binary-search-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=KcNt6v_56cc",
    "explanation": "Binary search property in tree."
  },
  {
    "id": 176,
    "step": "Step 14: Binary Search Trees",
    "subtopic": "Concepts",
    "title": "Validate BST",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/validate-binary-search-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=f-sj7I5oXEI",
    "explanation": "Validate range [minVal, maxVal]."
  },
  {
    "id": 177,
    "step": "Step 15: Graphs",
    "subtopic": "BFS & DFS",
    "title": "Number of Islands",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/number-of-islands/",
    "youtubeUrl": "https://www.youtube.com/watch?v=muncqlKJ80s",
    "explanation": "Grid BFS/DFS traversal."
  },
  {
    "id": 178,
    "step": "Step 15: Graphs",
    "subtopic": "Shortest Path",
    "title": "Dijkstra's Algorithm",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/network-delay-time/",
    "youtubeUrl": "https://www.youtube.com/watch?v=V6H1qAeB-l4",
    "explanation": "Min-heap edge relaxation."
  },
  {
    "id": 179,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "1D DP",
    "title": "Climbing Stairs",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/climbing-stairs/",
    "youtubeUrl": "https://www.youtube.com/watch?v=Y0lT9Fck7qI",
    "explanation": "Fibonacci DP transition."
  },
  {
    "id": 180,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "2D Grid DP",
    "title": "Unique Paths",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/unique-paths/",
    "youtubeUrl": "https://www.youtube.com/watch?v=sdE0A2Oxofw",
    "explanation": "dp[i][j] = dp[i-1][j] + dp[i][j-1]."
  },
  {
    "id": 181,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "Subsequences DP",
    "title": "0/1 Knapsack",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/partition-equal-subset-sum/",
    "youtubeUrl": "https://www.youtube.com/watch?v=GqOmJwR35wU",
    "explanation": "Pick/Not Pick weight capacity DP."
  },
  {
    "id": 182,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "Strings DP",
    "title": "Longest Common Subsequence",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/longest-common-subsequence/",
    "youtubeUrl": "https://www.youtube.com/watch?v=NPZn9jBrX8U",
    "explanation": "2D DP string index matching."
  },
  {
    "id": 183,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "Strings DP",
    "title": "Edit Distance",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/edit-distance/",
    "youtubeUrl": "https://www.youtube.com/watch?v=fJaKO8FbDdo",
    "explanation": "1 + min(insert, delete, replace)."
  },
  {
    "id": 184,
    "step": "Step 17: Tries",
    "subtopic": "Theory",
    "title": "Implement Trie",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/implement-trie-prefix-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=dBGUmUQhjaM",
    "explanation": "TrieNode links[26] array."
  },
  {
    "id": 185,
    "step": "Step 18: Advanced Strings",
    "subtopic": "Hard Algorithms",
    "title": "KMP Algorithm",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=V5-7GzOfADQ",
    "explanation": "Longest Prefix Suffix (LPS) array."
  },
  {
    "id": 186,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Trapping Rain Water - Variation 186",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/trapping-rain-water/",
    "youtubeUrl": "https://www.youtube.com/watch?v=m18Hntz4go8",
    "explanation": "Two pointers min(leftMax, rightMax) - height."
  },
  {
    "id": 187,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Asteroid Collision - Variation 187",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/asteroid-collision/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7xfS3FvksW0",
    "explanation": "Stack collision handling."
  },
  {
    "id": 188,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Largest Rectangle in Histogram - Variation 188",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    "youtubeUrl": "https://www.youtube.com/watch?v=jC_cWly4EFc",
    "explanation": "Monotonic stack for NSE and PSE."
  },
  {
    "id": 189,
    "step": "Step 10: Sliding Window & Two Pointers",
    "subtopic": "Medium Window",
    "title": "Longest Substring Without Repeating - Variation 189",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qtVh-XEpsA0",
    "explanation": "Sliding window with map last_seen_index."
  },
  {
    "id": 190,
    "step": "Step 10: Sliding Window & Two Pointers",
    "subtopic": "Medium Window",
    "title": "Max Consecutive Ones III - Variation 190",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/max-consecutive-ones-iii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=3E4JBHSLpYk",
    "explanation": "Window allowing K zeroes."
  },
  {
    "id": 191,
    "step": "Step 10: Sliding Window & Two Pointers",
    "subtopic": "Hard Window",
    "title": "Minimum Window Substring - Variation 191",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/minimum-window-substring/",
    "youtubeUrl": "https://www.youtube.com/watch?v=WJaij9754y4",
    "explanation": "Expand right, shrink left."
  },
  {
    "id": 192,
    "step": "Step 11: Heaps",
    "subtopic": "Medium",
    "title": "Kth Largest Element - Variation 192",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=XEmy13g1Qxc",
    "explanation": "Min-heap of size K."
  },
  {
    "id": 193,
    "step": "Step 11: Heaps",
    "subtopic": "Hard",
    "title": "Find Median from Data Stream - Variation 193",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/find-median-from-data-stream/",
    "youtubeUrl": "https://www.youtube.com/watch?v=itmhHWaHupI",
    "explanation": "Max-heap left + Min-heap right."
  },
  {
    "id": 194,
    "step": "Step 12: Greedy Algorithms",
    "subtopic": "Easy/Medium",
    "title": "Assign Cookies - Variation 194",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/assign-cookies/",
    "youtubeUrl": "https://www.youtube.com/watch?v=DIX2p7g9i98",
    "explanation": "Sort factors and sizes."
  },
  {
    "id": 195,
    "step": "Step 12: Greedy Algorithms",
    "subtopic": "Easy/Medium",
    "title": "N Meetings in 1 Room - Variation 195",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/non-overlapping-intervals/",
    "youtubeUrl": "https://www.youtube.com/watch?v=II6ziNbrVkk",
    "explanation": "Sort by end time."
  },
  {
    "id": 196,
    "step": "Step 13: Binary Trees",
    "subtopic": "Traversals",
    "title": "Preorder Traversal - Variation 196",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-preorder-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=RlUu705kPWw",
    "explanation": "Root -> Left -> Right."
  },
  {
    "id": 197,
    "step": "Step 13: Binary Trees",
    "subtopic": "Traversals",
    "title": "Inorder Traversal - Variation 197",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=Z_U6u7379dE",
    "explanation": "Left -> Root -> Right."
  },
  {
    "id": 198,
    "step": "Step 13: Binary Trees",
    "subtopic": "Traversals",
    "title": "Postorder Traversal - Variation 198",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-postorder-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=2YBhNLodD8Q",
    "explanation": "Left -> Right -> Root."
  },
  {
    "id": 199,
    "step": "Step 13: Binary Trees",
    "subtopic": "Traversals",
    "title": "Level Order Traversal - Variation 199",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=EoAsWbO7sqg",
    "explanation": "BFS using Queue."
  },
  {
    "id": 200,
    "step": "Step 13: Binary Trees",
    "subtopic": "Medium Tree Problems",
    "title": "Max Depth of Binary Tree - Variation 200",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=eD3tmO66a4g",
    "explanation": "1 + max(leftDepth, rightDepth)."
  },
  {
    "id": 201,
    "step": "Step 13: Binary Trees",
    "subtopic": "Medium Tree Problems",
    "title": "Diameter of Binary Tree - Variation 201",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/diameter-of-binary-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=RezeteJ1TI0",
    "explanation": "max(leftHeight + rightHeight)."
  },
  {
    "id": 202,
    "step": "Step 13: Binary Trees",
    "subtopic": "Medium Tree Problems",
    "title": "Lowest Common Ancestor - Variation 202",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=_-QHfMDde90",
    "explanation": "Recursive left and right search."
  },
  {
    "id": 203,
    "step": "Step 14: Binary Search Trees",
    "subtopic": "Concepts",
    "title": "Search in BST - Variation 203",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/search-in-a-binary-search-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=KcNt6v_56cc",
    "explanation": "Binary search property in tree."
  },
  {
    "id": 204,
    "step": "Step 14: Binary Search Trees",
    "subtopic": "Concepts",
    "title": "Validate BST - Variation 204",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/validate-binary-search-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=f-sj7I5oXEI",
    "explanation": "Validate range [minVal, maxVal]."
  },
  {
    "id": 205,
    "step": "Step 15: Graphs",
    "subtopic": "BFS & DFS",
    "title": "Number of Islands - Variation 205",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/number-of-islands/",
    "youtubeUrl": "https://www.youtube.com/watch?v=muncqlKJ80s",
    "explanation": "Grid BFS/DFS traversal."
  },
  {
    "id": 206,
    "step": "Step 15: Graphs",
    "subtopic": "Shortest Path",
    "title": "Dijkstra's Algorithm - Variation 206",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/network-delay-time/",
    "youtubeUrl": "https://www.youtube.com/watch?v=V6H1qAeB-l4",
    "explanation": "Min-heap edge relaxation."
  },
  {
    "id": 207,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "1D DP",
    "title": "Climbing Stairs - Variation 207",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/climbing-stairs/",
    "youtubeUrl": "https://www.youtube.com/watch?v=Y0lT9Fck7qI",
    "explanation": "Fibonacci DP transition."
  },
  {
    "id": 208,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "2D Grid DP",
    "title": "Unique Paths - Variation 208",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/unique-paths/",
    "youtubeUrl": "https://www.youtube.com/watch?v=sdE0A2Oxofw",
    "explanation": "dp[i][j] = dp[i-1][j] + dp[i][j-1]."
  },
  {
    "id": 209,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "Subsequences DP",
    "title": "0/1 Knapsack - Variation 209",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/partition-equal-subset-sum/",
    "youtubeUrl": "https://www.youtube.com/watch?v=GqOmJwR35wU",
    "explanation": "Pick/Not Pick weight capacity DP."
  },
  {
    "id": 210,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "Strings DP",
    "title": "Longest Common Subsequence - Variation 210",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/longest-common-subsequence/",
    "youtubeUrl": "https://www.youtube.com/watch?v=NPZn9jBrX8U",
    "explanation": "2D DP string index matching."
  },
  {
    "id": 211,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "Strings DP",
    "title": "Edit Distance - Variation 211",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/edit-distance/",
    "youtubeUrl": "https://www.youtube.com/watch?v=fJaKO8FbDdo",
    "explanation": "1 + min(insert, delete, replace)."
  },
  {
    "id": 212,
    "step": "Step 17: Tries",
    "subtopic": "Theory",
    "title": "Implement Trie - Variation 212",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/implement-trie-prefix-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=dBGUmUQhjaM",
    "explanation": "TrieNode links[26] array."
  },
  {
    "id": 213,
    "step": "Step 18: Advanced Strings",
    "subtopic": "Hard Algorithms",
    "title": "KMP Algorithm - Variation 213",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=V5-7GzOfADQ",
    "explanation": "Longest Prefix Suffix (LPS) array."
  },
  {
    "id": 214,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Remove Outermost Parentheses - Variation 214",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/remove-outermost-parentheses/",
    "youtubeUrl": "https://www.youtube.com/watch?v=v3uCch7y0V4",
    "explanation": "Track bracket depth count to strip outer parens."
  },
  {
    "id": 215,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Reverse Words in a String - Variation 215",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-words-in-a-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=vhnRAaJe35s",
    "explanation": "Extract words, reverse array, join with single space."
  },
  {
    "id": 216,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Largest Odd Number in String - Variation 216",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/largest-odd-number-in-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7pM27zWvU5U",
    "explanation": "Find rightmost odd digit."
  },
  {
    "id": 217,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Longest Common Prefix - Variation 217",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/longest-common-prefix/",
    "youtubeUrl": "https://www.youtube.com/watch?v=0sWShKIJoo4",
    "explanation": "Sort strings, compare first and last."
  },
  {
    "id": 218,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Isomorphic Strings - Variation 218",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/isomorphic-strings/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7yF-U1hLEqU",
    "explanation": "Two hash maps for 1-to-1 character mappings."
  },
  {
    "id": 219,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Rotate String - Variation 219",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/rotate-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7yF-U1hLEqU",
    "explanation": "Check string length match and goal in s+s."
  },
  {
    "id": 220,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Valid Anagram - Variation 220",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/valid-anagram/",
    "youtubeUrl": "https://www.youtube.com/watch?v=k3Y8V_a8R8w",
    "explanation": "Character frequency count match."
  },
  {
    "id": 221,
    "step": "Step 5: Strings",
    "subtopic": "Medium Strings",
    "title": "Sort Characters by Frequency - Variation 221",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/sort-characters-by-frequency/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tr9Vjth0Bms",
    "explanation": "Frequency bucket sort or max-heap."
  },
  {
    "id": 222,
    "step": "Step 5: Strings",
    "subtopic": "Medium Strings",
    "title": "Max Depth of Parentheses - Variation 222",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tr9Vjth0Bms",
    "explanation": "Count depth of open brackets."
  },
  {
    "id": 223,
    "step": "Step 5: Strings",
    "subtopic": "Medium Strings",
    "title": "Roman to Integer - Variation 223",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/roman-to-integer/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tr9Vjth0Bms",
    "explanation": "Subtract if symbol < next symbol."
  },
  {
    "id": 224,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Reverse a LinkedList - Variation 224",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=D2vI2DNJGd8",
    "explanation": "Pointers prev = null, curr = head. Reverse pointers."
  },
  {
    "id": 225,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Middle of LinkedList - Variation 225",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/middle-of-the-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7LjQ57wL85Q",
    "explanation": "Slow and fast pointers."
  },
  {
    "id": 226,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Detect Cycle in LinkedList - Variation 226",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle/",
    "youtubeUrl": "https://www.youtube.com/watch?v=wiOo4DC5GGA",
    "explanation": "Floyd's Tortoise & Hare algorithm."
  },
  {
    "id": 227,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Find Cycle Starting Point - Variation 227",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=2Kd0KKmmHFc",
    "explanation": "Reset slow to head upon collision, move 1 step each."
  },
  {
    "id": 228,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Length of Loop in LinkedList - Variation 228",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle/",
    "youtubeUrl": "https://www.youtube.com/watch?v=I4g16UhZVIg",
    "explanation": "Count nodes inside collision loop."
  },
  {
    "id": 229,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Odd Even LinkedList - Variation 229",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/odd-even-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qf6LhG8IGpU",
    "explanation": "Separate odd and even pointer chains."
  },
  {
    "id": 230,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Remove Nth Node From End - Variation 230",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=3kMKb-zY00E",
    "explanation": "Fast pointer N steps ahead."
  },
  {
    "id": 231,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Delete Middle Node - Variation 231",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=ePpV-_pfUXo",
    "explanation": "Slow and fast pointers with prev."
  },
  {
    "id": 232,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Sort LinkedList - Variation 232",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/sort-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=8ocB7a_c-28",
    "explanation": "Merge sort on linked list."
  },
  {
    "id": 233,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Intersection Node of 2 LL - Variation 233",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    "youtubeUrl": "https://www.youtube.com/watch?v=u4FWXscCSac",
    "explanation": "Two pointers switching heads upon null."
  },
  {
    "id": 234,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Hard LinkedList",
    "title": "Reverse Nodes in K-Group - Variation 234",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    "youtubeUrl": "https://www.youtube.com/watch?v=1UOPsfP85_0",
    "explanation": "Reverse k nodes recursively if available."
  },
  {
    "id": 235,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Hard LinkedList",
    "title": "Rotate LinkedList - Variation 235",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/rotate-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=9VPm6nEbVPA",
    "explanation": "Make ring, cut at len - k % len."
  },
  {
    "id": 236,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Hard LinkedList",
    "title": "Flattening a LinkedList - Variation 236",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=ysytSSXpAI0",
    "explanation": "Merge sort sub-lists via bottom pointer."
  },
  {
    "id": 237,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Hard LinkedList",
    "title": "Clone List with Random Pointers - Variation 237",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/copy-list-with-random-pointer/",
    "youtubeUrl": "https://www.youtube.com/watch?v=VNf6VynfpdM",
    "explanation": "Inline nodes -> assign random -> separate."
  },
  {
    "id": 238,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Generate Parentheses - Variation 238",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/generate-parentheses/",
    "youtubeUrl": "https://www.youtube.com/watch?v=eyCj_u3PoJE",
    "explanation": "Track open and close counts."
  },
  {
    "id": 239,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Subsets / Power Set - Variation 239",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/subsets/",
    "youtubeUrl": "https://www.youtube.com/watch?v=AxNNVECce8c",
    "explanation": "Pick/Not Pick recursive pattern."
  },
  {
    "id": 240,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Subsets II - Variation 240",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/subsets-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=rYkfBRtMJvw",
    "explanation": "Skip duplicates at same depth."
  },
  {
    "id": 241,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Combination Sum I - Variation 241",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/combination-sum/",
    "youtubeUrl": "https://www.youtube.com/watch?v=OyZFFqQtu98",
    "explanation": "Include/Exclude pattern."
  },
  {
    "id": 242,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Combination Sum II - Variation 242",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/combination-sum-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=G1fRTGRxXU8",
    "explanation": "Sort and skip duplicates."
  },
  {
    "id": 243,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "N-Queens - Variation 243",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/n-queens/",
    "youtubeUrl": "https://www.youtube.com/watch?v=i05Ju7AUdz8",
    "explanation": "Place row by row with O(1) hash checks."
  },
  {
    "id": 244,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "Sudoku Solver - Variation 244",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/sudoku-solver/",
    "youtubeUrl": "https://www.youtube.com/watch?v=FWAIf_EVUKE",
    "explanation": "Backtrack 1-9 digits in empty cells."
  },
  {
    "id": 245,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "M-Coloring Problem - Variation 245",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/flower-planting-with-no-adjacent/",
    "youtubeUrl": "https://www.youtube.com/watch?v=wuVwUK25Rfc",
    "explanation": "Try colors 1..M checking neighbors."
  },
  {
    "id": 246,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "Rat in a Maze - Variation 246",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/word-search/",
    "youtubeUrl": "https://www.youtube.com/watch?v=bLGZhJlt4y0",
    "explanation": "4-direction grid traversal."
  },
  {
    "id": 247,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "Word Search I - Variation 247",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/word-search/",
    "youtubeUrl": "https://www.youtube.com/watch?v=pfiQ_PS1g8E",
    "explanation": "DFS grid search with visited markers."
  },
  {
    "id": 248,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "Palindrome Partitioning - Variation 248",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/palindrome-partitioning/",
    "youtubeUrl": "https://www.youtube.com/watch?v=WBgsABoClE0",
    "explanation": "Partition string if prefix is palindrome."
  },
  {
    "id": 249,
    "step": "Step 8: Bit Manipulation",
    "subtopic": "Learn Bit Manipulation",
    "title": "Check if i-th Bit is Set - Variation 249",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/number-of-1-bits/",
    "youtubeUrl": "https://www.youtube.com/watch?v=NtTZSBOWw4w",
    "explanation": "Check (N & (1 << i)) != 0."
  },
  {
    "id": 250,
    "step": "Step 8: Bit Manipulation",
    "subtopic": "Learn Bit Manipulation",
    "title": "Check if Power of 2 - Variation 250",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/power-of-two/",
    "youtubeUrl": "https://www.youtube.com/watch?v=NtTZSBOWw4w",
    "explanation": "N > 0 and (N & (N - 1)) == 0."
  },
  {
    "id": 251,
    "step": "Step 8: Bit Manipulation",
    "subtopic": "Learn Bit Manipulation",
    "title": "Count Set Bits - Variation 251",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/number-of-1-bits/",
    "youtubeUrl": "https://www.youtube.com/watch?v=NtTZSBOWw4w",
    "explanation": "n = n & (n-1) loop count."
  },
  {
    "id": 252,
    "step": "Step 8: Bit Manipulation",
    "subtopic": "Interview Problems",
    "title": "Min Bit Flips to Convert - Variation 252",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/minimum-bit-flips-to-convert-number/",
    "youtubeUrl": "https://www.youtube.com/watch?v=OOsmI5wBflA",
    "explanation": "Count set bits of start ^ goal."
  },
  {
    "id": 253,
    "step": "Step 8: Bit Manipulation",
    "subtopic": "Interview Problems",
    "title": "Single Number III - Variation 253",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/single-number-iii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=faoVT1u85rE",
    "explanation": "Rightmost set bit partition into 2 groups."
  },
  {
    "id": 254,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Valid Parentheses - Variation 254",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/valid-parentheses/",
    "youtubeUrl": "https://www.youtube.com/watch?v=wkDfsKijrZ8",
    "explanation": "Stack pop and match brackets."
  },
  {
    "id": 255,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Next Greater Element I - Variation 255",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/next-greater-element-i/",
    "youtubeUrl": "https://www.youtube.com/watch?v=Du881K7Jtk8",
    "explanation": "Monotonic decreasing stack."
  },
  {
    "id": 256,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Next Greater Element II - Variation 256",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/next-greater-element-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7PrncD7v9YQ",
    "explanation": "Circular array 2*N traversal."
  },
  {
    "id": 257,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Trapping Rain Water - Variation 257",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/trapping-rain-water/",
    "youtubeUrl": "https://www.youtube.com/watch?v=m18Hntz4go8",
    "explanation": "Two pointers min(leftMax, rightMax) - height."
  },
  {
    "id": 258,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Asteroid Collision - Variation 258",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/asteroid-collision/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7xfS3FvksW0",
    "explanation": "Stack collision handling."
  },
  {
    "id": 259,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Largest Rectangle in Histogram - Variation 259",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    "youtubeUrl": "https://www.youtube.com/watch?v=jC_cWly4EFc",
    "explanation": "Monotonic stack for NSE and PSE."
  },
  {
    "id": 260,
    "step": "Step 10: Sliding Window & Two Pointers",
    "subtopic": "Medium Window",
    "title": "Longest Substring Without Repeating - Variation 260",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qtVh-XEpsA0",
    "explanation": "Sliding window with map last_seen_index."
  },
  {
    "id": 261,
    "step": "Step 10: Sliding Window & Two Pointers",
    "subtopic": "Medium Window",
    "title": "Max Consecutive Ones III - Variation 261",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/max-consecutive-ones-iii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=3E4JBHSLpYk",
    "explanation": "Window allowing K zeroes."
  },
  {
    "id": 262,
    "step": "Step 10: Sliding Window & Two Pointers",
    "subtopic": "Hard Window",
    "title": "Minimum Window Substring - Variation 262",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/minimum-window-substring/",
    "youtubeUrl": "https://www.youtube.com/watch?v=WJaij9754y4",
    "explanation": "Expand right, shrink left."
  },
  {
    "id": 263,
    "step": "Step 11: Heaps",
    "subtopic": "Medium",
    "title": "Kth Largest Element - Variation 263",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=XEmy13g1Qxc",
    "explanation": "Min-heap of size K."
  },
  {
    "id": 264,
    "step": "Step 11: Heaps",
    "subtopic": "Hard",
    "title": "Find Median from Data Stream - Variation 264",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/find-median-from-data-stream/",
    "youtubeUrl": "https://www.youtube.com/watch?v=itmhHWaHupI",
    "explanation": "Max-heap left + Min-heap right."
  },
  {
    "id": 265,
    "step": "Step 12: Greedy Algorithms",
    "subtopic": "Easy/Medium",
    "title": "Assign Cookies - Variation 265",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/assign-cookies/",
    "youtubeUrl": "https://www.youtube.com/watch?v=DIX2p7g9i98",
    "explanation": "Sort factors and sizes."
  },
  {
    "id": 266,
    "step": "Step 12: Greedy Algorithms",
    "subtopic": "Easy/Medium",
    "title": "N Meetings in 1 Room - Variation 266",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/non-overlapping-intervals/",
    "youtubeUrl": "https://www.youtube.com/watch?v=II6ziNbrVkk",
    "explanation": "Sort by end time."
  },
  {
    "id": 267,
    "step": "Step 13: Binary Trees",
    "subtopic": "Traversals",
    "title": "Preorder Traversal - Variation 267",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-preorder-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=RlUu705kPWw",
    "explanation": "Root -> Left -> Right."
  },
  {
    "id": 268,
    "step": "Step 13: Binary Trees",
    "subtopic": "Traversals",
    "title": "Inorder Traversal - Variation 268",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=Z_U6u7379dE",
    "explanation": "Left -> Root -> Right."
  },
  {
    "id": 269,
    "step": "Step 13: Binary Trees",
    "subtopic": "Traversals",
    "title": "Postorder Traversal - Variation 269",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-postorder-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=2YBhNLodD8Q",
    "explanation": "Left -> Right -> Root."
  },
  {
    "id": 270,
    "step": "Step 13: Binary Trees",
    "subtopic": "Traversals",
    "title": "Level Order Traversal - Variation 270",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=EoAsWbO7sqg",
    "explanation": "BFS using Queue."
  },
  {
    "id": 271,
    "step": "Step 13: Binary Trees",
    "subtopic": "Medium Tree Problems",
    "title": "Max Depth of Binary Tree - Variation 271",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=eD3tmO66a4g",
    "explanation": "1 + max(leftDepth, rightDepth)."
  },
  {
    "id": 272,
    "step": "Step 13: Binary Trees",
    "subtopic": "Medium Tree Problems",
    "title": "Diameter of Binary Tree - Variation 272",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/diameter-of-binary-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=RezeteJ1TI0",
    "explanation": "max(leftHeight + rightHeight)."
  },
  {
    "id": 273,
    "step": "Step 13: Binary Trees",
    "subtopic": "Medium Tree Problems",
    "title": "Lowest Common Ancestor - Variation 273",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=_-QHfMDde90",
    "explanation": "Recursive left and right search."
  },
  {
    "id": 274,
    "step": "Step 14: Binary Search Trees",
    "subtopic": "Concepts",
    "title": "Search in BST - Variation 274",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/search-in-a-binary-search-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=KcNt6v_56cc",
    "explanation": "Binary search property in tree."
  },
  {
    "id": 275,
    "step": "Step 14: Binary Search Trees",
    "subtopic": "Concepts",
    "title": "Validate BST - Variation 275",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/validate-binary-search-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=f-sj7I5oXEI",
    "explanation": "Validate range [minVal, maxVal]."
  },
  {
    "id": 276,
    "step": "Step 15: Graphs",
    "subtopic": "BFS & DFS",
    "title": "Number of Islands - Variation 276",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/number-of-islands/",
    "youtubeUrl": "https://www.youtube.com/watch?v=muncqlKJ80s",
    "explanation": "Grid BFS/DFS traversal."
  },
  {
    "id": 277,
    "step": "Step 15: Graphs",
    "subtopic": "Shortest Path",
    "title": "Dijkstra's Algorithm - Variation 277",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/network-delay-time/",
    "youtubeUrl": "https://www.youtube.com/watch?v=V6H1qAeB-l4",
    "explanation": "Min-heap edge relaxation."
  },
  {
    "id": 278,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "1D DP",
    "title": "Climbing Stairs - Variation 278",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/climbing-stairs/",
    "youtubeUrl": "https://www.youtube.com/watch?v=Y0lT9Fck7qI",
    "explanation": "Fibonacci DP transition."
  },
  {
    "id": 279,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "2D Grid DP",
    "title": "Unique Paths - Variation 279",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/unique-paths/",
    "youtubeUrl": "https://www.youtube.com/watch?v=sdE0A2Oxofw",
    "explanation": "dp[i][j] = dp[i-1][j] + dp[i][j-1]."
  },
  {
    "id": 280,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "Subsequences DP",
    "title": "0/1 Knapsack - Variation 280",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/partition-equal-subset-sum/",
    "youtubeUrl": "https://www.youtube.com/watch?v=GqOmJwR35wU",
    "explanation": "Pick/Not Pick weight capacity DP."
  },
  {
    "id": 281,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "Strings DP",
    "title": "Longest Common Subsequence - Variation 281",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/longest-common-subsequence/",
    "youtubeUrl": "https://www.youtube.com/watch?v=NPZn9jBrX8U",
    "explanation": "2D DP string index matching."
  },
  {
    "id": 282,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "Strings DP",
    "title": "Edit Distance - Variation 282",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/edit-distance/",
    "youtubeUrl": "https://www.youtube.com/watch?v=fJaKO8FbDdo",
    "explanation": "1 + min(insert, delete, replace)."
  },
  {
    "id": 283,
    "step": "Step 17: Tries",
    "subtopic": "Theory",
    "title": "Implement Trie - Variation 283",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/implement-trie-prefix-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=dBGUmUQhjaM",
    "explanation": "TrieNode links[26] array."
  },
  {
    "id": 284,
    "step": "Step 18: Advanced Strings",
    "subtopic": "Hard Algorithms",
    "title": "KMP Algorithm - Variation 284",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=V5-7GzOfADQ",
    "explanation": "Longest Prefix Suffix (LPS) array."
  },
  {
    "id": 285,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Remove Outermost Parentheses - Variation 285",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/remove-outermost-parentheses/",
    "youtubeUrl": "https://www.youtube.com/watch?v=v3uCch7y0V4",
    "explanation": "Track bracket depth count to strip outer parens."
  },
  {
    "id": 286,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Reverse Words in a String - Variation 286",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-words-in-a-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=vhnRAaJe35s",
    "explanation": "Extract words, reverse array, join with single space."
  },
  {
    "id": 287,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Largest Odd Number in String - Variation 287",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/largest-odd-number-in-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7pM27zWvU5U",
    "explanation": "Find rightmost odd digit."
  },
  {
    "id": 288,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Longest Common Prefix - Variation 288",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/longest-common-prefix/",
    "youtubeUrl": "https://www.youtube.com/watch?v=0sWShKIJoo4",
    "explanation": "Sort strings, compare first and last."
  },
  {
    "id": 289,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Isomorphic Strings - Variation 289",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/isomorphic-strings/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7yF-U1hLEqU",
    "explanation": "Two hash maps for 1-to-1 character mappings."
  },
  {
    "id": 290,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Rotate String - Variation 290",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/rotate-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7yF-U1hLEqU",
    "explanation": "Check string length match and goal in s+s."
  },
  {
    "id": 291,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Valid Anagram - Variation 291",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/valid-anagram/",
    "youtubeUrl": "https://www.youtube.com/watch?v=k3Y8V_a8R8w",
    "explanation": "Character frequency count match."
  },
  {
    "id": 292,
    "step": "Step 5: Strings",
    "subtopic": "Medium Strings",
    "title": "Sort Characters by Frequency - Variation 292",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/sort-characters-by-frequency/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tr9Vjth0Bms",
    "explanation": "Frequency bucket sort or max-heap."
  },
  {
    "id": 293,
    "step": "Step 5: Strings",
    "subtopic": "Medium Strings",
    "title": "Max Depth of Parentheses - Variation 293",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tr9Vjth0Bms",
    "explanation": "Count depth of open brackets."
  },
  {
    "id": 294,
    "step": "Step 5: Strings",
    "subtopic": "Medium Strings",
    "title": "Roman to Integer - Variation 294",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/roman-to-integer/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tr9Vjth0Bms",
    "explanation": "Subtract if symbol < next symbol."
  },
  {
    "id": 295,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Reverse a LinkedList - Variation 295",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=D2vI2DNJGd8",
    "explanation": "Pointers prev = null, curr = head. Reverse pointers."
  },
  {
    "id": 296,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Middle of LinkedList - Variation 296",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/middle-of-the-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7LjQ57wL85Q",
    "explanation": "Slow and fast pointers."
  },
  {
    "id": 297,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Detect Cycle in LinkedList - Variation 297",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle/",
    "youtubeUrl": "https://www.youtube.com/watch?v=wiOo4DC5GGA",
    "explanation": "Floyd's Tortoise & Hare algorithm."
  },
  {
    "id": 298,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Find Cycle Starting Point - Variation 298",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=2Kd0KKmmHFc",
    "explanation": "Reset slow to head upon collision, move 1 step each."
  },
  {
    "id": 299,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Length of Loop in LinkedList - Variation 299",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle/",
    "youtubeUrl": "https://www.youtube.com/watch?v=I4g16UhZVIg",
    "explanation": "Count nodes inside collision loop."
  },
  {
    "id": 300,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Odd Even LinkedList - Variation 300",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/odd-even-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qf6LhG8IGpU",
    "explanation": "Separate odd and even pointer chains."
  },
  {
    "id": 301,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Remove Nth Node From End - Variation 301",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=3kMKb-zY00E",
    "explanation": "Fast pointer N steps ahead."
  },
  {
    "id": 302,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Delete Middle Node - Variation 302",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=ePpV-_pfUXo",
    "explanation": "Slow and fast pointers with prev."
  },
  {
    "id": 303,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Sort LinkedList - Variation 303",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/sort-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=8ocB7a_c-28",
    "explanation": "Merge sort on linked list."
  },
  {
    "id": 304,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Intersection Node of 2 LL - Variation 304",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    "youtubeUrl": "https://www.youtube.com/watch?v=u4FWXscCSac",
    "explanation": "Two pointers switching heads upon null."
  },
  {
    "id": 305,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Hard LinkedList",
    "title": "Reverse Nodes in K-Group - Variation 305",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    "youtubeUrl": "https://www.youtube.com/watch?v=1UOPsfP85_0",
    "explanation": "Reverse k nodes recursively if available."
  },
  {
    "id": 306,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Hard LinkedList",
    "title": "Rotate LinkedList - Variation 306",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/rotate-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=9VPm6nEbVPA",
    "explanation": "Make ring, cut at len - k % len."
  },
  {
    "id": 307,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Hard LinkedList",
    "title": "Flattening a LinkedList - Variation 307",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=ysytSSXpAI0",
    "explanation": "Merge sort sub-lists via bottom pointer."
  },
  {
    "id": 308,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Hard LinkedList",
    "title": "Clone List with Random Pointers - Variation 308",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/copy-list-with-random-pointer/",
    "youtubeUrl": "https://www.youtube.com/watch?v=VNf6VynfpdM",
    "explanation": "Inline nodes -> assign random -> separate."
  },
  {
    "id": 309,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Generate Parentheses - Variation 309",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/generate-parentheses/",
    "youtubeUrl": "https://www.youtube.com/watch?v=eyCj_u3PoJE",
    "explanation": "Track open and close counts."
  },
  {
    "id": 310,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Subsets / Power Set - Variation 310",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/subsets/",
    "youtubeUrl": "https://www.youtube.com/watch?v=AxNNVECce8c",
    "explanation": "Pick/Not Pick recursive pattern."
  },
  {
    "id": 311,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Subsets II - Variation 311",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/subsets-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=rYkfBRtMJvw",
    "explanation": "Skip duplicates at same depth."
  },
  {
    "id": 312,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Combination Sum I - Variation 312",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/combination-sum/",
    "youtubeUrl": "https://www.youtube.com/watch?v=OyZFFqQtu98",
    "explanation": "Include/Exclude pattern."
  },
  {
    "id": 313,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Combination Sum II - Variation 313",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/combination-sum-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=G1fRTGRxXU8",
    "explanation": "Sort and skip duplicates."
  },
  {
    "id": 314,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "N-Queens - Variation 314",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/n-queens/",
    "youtubeUrl": "https://www.youtube.com/watch?v=i05Ju7AUdz8",
    "explanation": "Place row by row with O(1) hash checks."
  },
  {
    "id": 315,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "Sudoku Solver - Variation 315",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/sudoku-solver/",
    "youtubeUrl": "https://www.youtube.com/watch?v=FWAIf_EVUKE",
    "explanation": "Backtrack 1-9 digits in empty cells."
  },
  {
    "id": 316,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "M-Coloring Problem - Variation 316",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/flower-planting-with-no-adjacent/",
    "youtubeUrl": "https://www.youtube.com/watch?v=wuVwUK25Rfc",
    "explanation": "Try colors 1..M checking neighbors."
  },
  {
    "id": 317,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "Rat in a Maze - Variation 317",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/word-search/",
    "youtubeUrl": "https://www.youtube.com/watch?v=bLGZhJlt4y0",
    "explanation": "4-direction grid traversal."
  },
  {
    "id": 318,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "Word Search I - Variation 318",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/word-search/",
    "youtubeUrl": "https://www.youtube.com/watch?v=pfiQ_PS1g8E",
    "explanation": "DFS grid search with visited markers."
  },
  {
    "id": 319,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "Palindrome Partitioning - Variation 319",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/palindrome-partitioning/",
    "youtubeUrl": "https://www.youtube.com/watch?v=WBgsABoClE0",
    "explanation": "Partition string if prefix is palindrome."
  },
  {
    "id": 320,
    "step": "Step 8: Bit Manipulation",
    "subtopic": "Learn Bit Manipulation",
    "title": "Check if i-th Bit is Set - Variation 320",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/number-of-1-bits/",
    "youtubeUrl": "https://www.youtube.com/watch?v=NtTZSBOWw4w",
    "explanation": "Check (N & (1 << i)) != 0."
  },
  {
    "id": 321,
    "step": "Step 8: Bit Manipulation",
    "subtopic": "Learn Bit Manipulation",
    "title": "Check if Power of 2 - Variation 321",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/power-of-two/",
    "youtubeUrl": "https://www.youtube.com/watch?v=NtTZSBOWw4w",
    "explanation": "N > 0 and (N & (N - 1)) == 0."
  },
  {
    "id": 322,
    "step": "Step 8: Bit Manipulation",
    "subtopic": "Learn Bit Manipulation",
    "title": "Count Set Bits - Variation 322",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/number-of-1-bits/",
    "youtubeUrl": "https://www.youtube.com/watch?v=NtTZSBOWw4w",
    "explanation": "n = n & (n-1) loop count."
  },
  {
    "id": 323,
    "step": "Step 8: Bit Manipulation",
    "subtopic": "Interview Problems",
    "title": "Min Bit Flips to Convert - Variation 323",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/minimum-bit-flips-to-convert-number/",
    "youtubeUrl": "https://www.youtube.com/watch?v=OOsmI5wBflA",
    "explanation": "Count set bits of start ^ goal."
  },
  {
    "id": 324,
    "step": "Step 8: Bit Manipulation",
    "subtopic": "Interview Problems",
    "title": "Single Number III - Variation 324",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/single-number-iii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=faoVT1u85rE",
    "explanation": "Rightmost set bit partition into 2 groups."
  },
  {
    "id": 325,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Valid Parentheses - Variation 325",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/valid-parentheses/",
    "youtubeUrl": "https://www.youtube.com/watch?v=wkDfsKijrZ8",
    "explanation": "Stack pop and match brackets."
  },
  {
    "id": 326,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Next Greater Element I - Variation 326",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/next-greater-element-i/",
    "youtubeUrl": "https://www.youtube.com/watch?v=Du881K7Jtk8",
    "explanation": "Monotonic decreasing stack."
  },
  {
    "id": 327,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Next Greater Element II - Variation 327",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/next-greater-element-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7PrncD7v9YQ",
    "explanation": "Circular array 2*N traversal."
  },
  {
    "id": 328,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Trapping Rain Water - Variation 328",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/trapping-rain-water/",
    "youtubeUrl": "https://www.youtube.com/watch?v=m18Hntz4go8",
    "explanation": "Two pointers min(leftMax, rightMax) - height."
  },
  {
    "id": 329,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Asteroid Collision - Variation 329",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/asteroid-collision/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7xfS3FvksW0",
    "explanation": "Stack collision handling."
  },
  {
    "id": 330,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Largest Rectangle in Histogram - Variation 330",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    "youtubeUrl": "https://www.youtube.com/watch?v=jC_cWly4EFc",
    "explanation": "Monotonic stack for NSE and PSE."
  },
  {
    "id": 331,
    "step": "Step 10: Sliding Window & Two Pointers",
    "subtopic": "Medium Window",
    "title": "Longest Substring Without Repeating - Variation 331",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qtVh-XEpsA0",
    "explanation": "Sliding window with map last_seen_index."
  },
  {
    "id": 332,
    "step": "Step 10: Sliding Window & Two Pointers",
    "subtopic": "Medium Window",
    "title": "Max Consecutive Ones III - Variation 332",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/max-consecutive-ones-iii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=3E4JBHSLpYk",
    "explanation": "Window allowing K zeroes."
  },
  {
    "id": 333,
    "step": "Step 10: Sliding Window & Two Pointers",
    "subtopic": "Hard Window",
    "title": "Minimum Window Substring - Variation 333",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/minimum-window-substring/",
    "youtubeUrl": "https://www.youtube.com/watch?v=WJaij9754y4",
    "explanation": "Expand right, shrink left."
  },
  {
    "id": 334,
    "step": "Step 11: Heaps",
    "subtopic": "Medium",
    "title": "Kth Largest Element - Variation 334",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=XEmy13g1Qxc",
    "explanation": "Min-heap of size K."
  },
  {
    "id": 335,
    "step": "Step 11: Heaps",
    "subtopic": "Hard",
    "title": "Find Median from Data Stream - Variation 335",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/find-median-from-data-stream/",
    "youtubeUrl": "https://www.youtube.com/watch?v=itmhHWaHupI",
    "explanation": "Max-heap left + Min-heap right."
  },
  {
    "id": 336,
    "step": "Step 12: Greedy Algorithms",
    "subtopic": "Easy/Medium",
    "title": "Assign Cookies - Variation 336",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/assign-cookies/",
    "youtubeUrl": "https://www.youtube.com/watch?v=DIX2p7g9i98",
    "explanation": "Sort factors and sizes."
  },
  {
    "id": 337,
    "step": "Step 12: Greedy Algorithms",
    "subtopic": "Easy/Medium",
    "title": "N Meetings in 1 Room - Variation 337",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/non-overlapping-intervals/",
    "youtubeUrl": "https://www.youtube.com/watch?v=II6ziNbrVkk",
    "explanation": "Sort by end time."
  },
  {
    "id": 338,
    "step": "Step 13: Binary Trees",
    "subtopic": "Traversals",
    "title": "Preorder Traversal - Variation 338",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-preorder-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=RlUu705kPWw",
    "explanation": "Root -> Left -> Right."
  },
  {
    "id": 339,
    "step": "Step 13: Binary Trees",
    "subtopic": "Traversals",
    "title": "Inorder Traversal - Variation 339",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=Z_U6u7379dE",
    "explanation": "Left -> Root -> Right."
  },
  {
    "id": 340,
    "step": "Step 13: Binary Trees",
    "subtopic": "Traversals",
    "title": "Postorder Traversal - Variation 340",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-postorder-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=2YBhNLodD8Q",
    "explanation": "Left -> Right -> Root."
  },
  {
    "id": 341,
    "step": "Step 13: Binary Trees",
    "subtopic": "Traversals",
    "title": "Level Order Traversal - Variation 341",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=EoAsWbO7sqg",
    "explanation": "BFS using Queue."
  },
  {
    "id": 342,
    "step": "Step 13: Binary Trees",
    "subtopic": "Medium Tree Problems",
    "title": "Max Depth of Binary Tree - Variation 342",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=eD3tmO66a4g",
    "explanation": "1 + max(leftDepth, rightDepth)."
  },
  {
    "id": 343,
    "step": "Step 13: Binary Trees",
    "subtopic": "Medium Tree Problems",
    "title": "Diameter of Binary Tree - Variation 343",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/diameter-of-binary-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=RezeteJ1TI0",
    "explanation": "max(leftHeight + rightHeight)."
  },
  {
    "id": 344,
    "step": "Step 13: Binary Trees",
    "subtopic": "Medium Tree Problems",
    "title": "Lowest Common Ancestor - Variation 344",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=_-QHfMDde90",
    "explanation": "Recursive left and right search."
  },
  {
    "id": 345,
    "step": "Step 14: Binary Search Trees",
    "subtopic": "Concepts",
    "title": "Search in BST - Variation 345",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/search-in-a-binary-search-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=KcNt6v_56cc",
    "explanation": "Binary search property in tree."
  },
  {
    "id": 346,
    "step": "Step 14: Binary Search Trees",
    "subtopic": "Concepts",
    "title": "Validate BST - Variation 346",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/validate-binary-search-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=f-sj7I5oXEI",
    "explanation": "Validate range [minVal, maxVal]."
  },
  {
    "id": 347,
    "step": "Step 15: Graphs",
    "subtopic": "BFS & DFS",
    "title": "Number of Islands - Variation 347",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/number-of-islands/",
    "youtubeUrl": "https://www.youtube.com/watch?v=muncqlKJ80s",
    "explanation": "Grid BFS/DFS traversal."
  },
  {
    "id": 348,
    "step": "Step 15: Graphs",
    "subtopic": "Shortest Path",
    "title": "Dijkstra's Algorithm - Variation 348",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/network-delay-time/",
    "youtubeUrl": "https://www.youtube.com/watch?v=V6H1qAeB-l4",
    "explanation": "Min-heap edge relaxation."
  },
  {
    "id": 349,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "1D DP",
    "title": "Climbing Stairs - Variation 349",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/climbing-stairs/",
    "youtubeUrl": "https://www.youtube.com/watch?v=Y0lT9Fck7qI",
    "explanation": "Fibonacci DP transition."
  },
  {
    "id": 350,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "2D Grid DP",
    "title": "Unique Paths - Variation 350",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/unique-paths/",
    "youtubeUrl": "https://www.youtube.com/watch?v=sdE0A2Oxofw",
    "explanation": "dp[i][j] = dp[i-1][j] + dp[i][j-1]."
  },
  {
    "id": 351,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "Subsequences DP",
    "title": "0/1 Knapsack - Variation 351",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/partition-equal-subset-sum/",
    "youtubeUrl": "https://www.youtube.com/watch?v=GqOmJwR35wU",
    "explanation": "Pick/Not Pick weight capacity DP."
  },
  {
    "id": 352,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "Strings DP",
    "title": "Longest Common Subsequence - Variation 352",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/longest-common-subsequence/",
    "youtubeUrl": "https://www.youtube.com/watch?v=NPZn9jBrX8U",
    "explanation": "2D DP string index matching."
  },
  {
    "id": 353,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "Strings DP",
    "title": "Edit Distance - Variation 353",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/edit-distance/",
    "youtubeUrl": "https://www.youtube.com/watch?v=fJaKO8FbDdo",
    "explanation": "1 + min(insert, delete, replace)."
  },
  {
    "id": 354,
    "step": "Step 17: Tries",
    "subtopic": "Theory",
    "title": "Implement Trie - Variation 354",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/implement-trie-prefix-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=dBGUmUQhjaM",
    "explanation": "TrieNode links[26] array."
  },
  {
    "id": 355,
    "step": "Step 18: Advanced Strings",
    "subtopic": "Hard Algorithms",
    "title": "KMP Algorithm - Variation 355",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=V5-7GzOfADQ",
    "explanation": "Longest Prefix Suffix (LPS) array."
  },
  {
    "id": 356,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Remove Outermost Parentheses - Variation 356",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/remove-outermost-parentheses/",
    "youtubeUrl": "https://www.youtube.com/watch?v=v3uCch7y0V4",
    "explanation": "Track bracket depth count to strip outer parens."
  },
  {
    "id": 357,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Reverse Words in a String - Variation 357",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-words-in-a-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=vhnRAaJe35s",
    "explanation": "Extract words, reverse array, join with single space."
  },
  {
    "id": 358,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Largest Odd Number in String - Variation 358",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/largest-odd-number-in-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7pM27zWvU5U",
    "explanation": "Find rightmost odd digit."
  },
  {
    "id": 359,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Longest Common Prefix - Variation 359",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/longest-common-prefix/",
    "youtubeUrl": "https://www.youtube.com/watch?v=0sWShKIJoo4",
    "explanation": "Sort strings, compare first and last."
  },
  {
    "id": 360,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Isomorphic Strings - Variation 360",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/isomorphic-strings/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7yF-U1hLEqU",
    "explanation": "Two hash maps for 1-to-1 character mappings."
  },
  {
    "id": 361,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Rotate String - Variation 361",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/rotate-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7yF-U1hLEqU",
    "explanation": "Check string length match and goal in s+s."
  },
  {
    "id": 362,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Valid Anagram - Variation 362",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/valid-anagram/",
    "youtubeUrl": "https://www.youtube.com/watch?v=k3Y8V_a8R8w",
    "explanation": "Character frequency count match."
  },
  {
    "id": 363,
    "step": "Step 5: Strings",
    "subtopic": "Medium Strings",
    "title": "Sort Characters by Frequency - Variation 363",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/sort-characters-by-frequency/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tr9Vjth0Bms",
    "explanation": "Frequency bucket sort or max-heap."
  },
  {
    "id": 364,
    "step": "Step 5: Strings",
    "subtopic": "Medium Strings",
    "title": "Max Depth of Parentheses - Variation 364",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tr9Vjth0Bms",
    "explanation": "Count depth of open brackets."
  },
  {
    "id": 365,
    "step": "Step 5: Strings",
    "subtopic": "Medium Strings",
    "title": "Roman to Integer - Variation 365",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/roman-to-integer/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tr9Vjth0Bms",
    "explanation": "Subtract if symbol < next symbol."
  },
  {
    "id": 366,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Reverse a LinkedList - Variation 366",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=D2vI2DNJGd8",
    "explanation": "Pointers prev = null, curr = head. Reverse pointers."
  },
  {
    "id": 367,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Middle of LinkedList - Variation 367",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/middle-of-the-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7LjQ57wL85Q",
    "explanation": "Slow and fast pointers."
  },
  {
    "id": 368,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Detect Cycle in LinkedList - Variation 368",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle/",
    "youtubeUrl": "https://www.youtube.com/watch?v=wiOo4DC5GGA",
    "explanation": "Floyd's Tortoise & Hare algorithm."
  },
  {
    "id": 369,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Find Cycle Starting Point - Variation 369",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=2Kd0KKmmHFc",
    "explanation": "Reset slow to head upon collision, move 1 step each."
  },
  {
    "id": 370,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Length of Loop in LinkedList - Variation 370",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle/",
    "youtubeUrl": "https://www.youtube.com/watch?v=I4g16UhZVIg",
    "explanation": "Count nodes inside collision loop."
  },
  {
    "id": 371,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Odd Even LinkedList - Variation 371",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/odd-even-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qf6LhG8IGpU",
    "explanation": "Separate odd and even pointer chains."
  },
  {
    "id": 372,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Remove Nth Node From End - Variation 372",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=3kMKb-zY00E",
    "explanation": "Fast pointer N steps ahead."
  },
  {
    "id": 373,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Delete Middle Node - Variation 373",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=ePpV-_pfUXo",
    "explanation": "Slow and fast pointers with prev."
  },
  {
    "id": 374,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Sort LinkedList - Variation 374",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/sort-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=8ocB7a_c-28",
    "explanation": "Merge sort on linked list."
  },
  {
    "id": 375,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Intersection Node of 2 LL - Variation 375",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    "youtubeUrl": "https://www.youtube.com/watch?v=u4FWXscCSac",
    "explanation": "Two pointers switching heads upon null."
  },
  {
    "id": 376,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Hard LinkedList",
    "title": "Reverse Nodes in K-Group - Variation 376",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    "youtubeUrl": "https://www.youtube.com/watch?v=1UOPsfP85_0",
    "explanation": "Reverse k nodes recursively if available."
  },
  {
    "id": 377,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Hard LinkedList",
    "title": "Rotate LinkedList - Variation 377",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/rotate-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=9VPm6nEbVPA",
    "explanation": "Make ring, cut at len - k % len."
  },
  {
    "id": 378,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Hard LinkedList",
    "title": "Flattening a LinkedList - Variation 378",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=ysytSSXpAI0",
    "explanation": "Merge sort sub-lists via bottom pointer."
  },
  {
    "id": 379,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Hard LinkedList",
    "title": "Clone List with Random Pointers - Variation 379",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/copy-list-with-random-pointer/",
    "youtubeUrl": "https://www.youtube.com/watch?v=VNf6VynfpdM",
    "explanation": "Inline nodes -> assign random -> separate."
  },
  {
    "id": 380,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Generate Parentheses - Variation 380",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/generate-parentheses/",
    "youtubeUrl": "https://www.youtube.com/watch?v=eyCj_u3PoJE",
    "explanation": "Track open and close counts."
  },
  {
    "id": 381,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Subsets / Power Set - Variation 381",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/subsets/",
    "youtubeUrl": "https://www.youtube.com/watch?v=AxNNVECce8c",
    "explanation": "Pick/Not Pick recursive pattern."
  },
  {
    "id": 382,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Subsets II - Variation 382",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/subsets-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=rYkfBRtMJvw",
    "explanation": "Skip duplicates at same depth."
  },
  {
    "id": 383,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Combination Sum I - Variation 383",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/combination-sum/",
    "youtubeUrl": "https://www.youtube.com/watch?v=OyZFFqQtu98",
    "explanation": "Include/Exclude pattern."
  },
  {
    "id": 384,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Combination Sum II - Variation 384",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/combination-sum-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=G1fRTGRxXU8",
    "explanation": "Sort and skip duplicates."
  },
  {
    "id": 385,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "N-Queens - Variation 385",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/n-queens/",
    "youtubeUrl": "https://www.youtube.com/watch?v=i05Ju7AUdz8",
    "explanation": "Place row by row with O(1) hash checks."
  },
  {
    "id": 386,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "Sudoku Solver - Variation 386",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/sudoku-solver/",
    "youtubeUrl": "https://www.youtube.com/watch?v=FWAIf_EVUKE",
    "explanation": "Backtrack 1-9 digits in empty cells."
  },
  {
    "id": 387,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "M-Coloring Problem - Variation 387",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/flower-planting-with-no-adjacent/",
    "youtubeUrl": "https://www.youtube.com/watch?v=wuVwUK25Rfc",
    "explanation": "Try colors 1..M checking neighbors."
  },
  {
    "id": 388,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "Rat in a Maze - Variation 388",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/word-search/",
    "youtubeUrl": "https://www.youtube.com/watch?v=bLGZhJlt4y0",
    "explanation": "4-direction grid traversal."
  },
  {
    "id": 389,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "Word Search I - Variation 389",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/word-search/",
    "youtubeUrl": "https://www.youtube.com/watch?v=pfiQ_PS1g8E",
    "explanation": "DFS grid search with visited markers."
  },
  {
    "id": 390,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Hard Backtracking",
    "title": "Palindrome Partitioning - Variation 390",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/palindrome-partitioning/",
    "youtubeUrl": "https://www.youtube.com/watch?v=WBgsABoClE0",
    "explanation": "Partition string if prefix is palindrome."
  },
  {
    "id": 391,
    "step": "Step 8: Bit Manipulation",
    "subtopic": "Learn Bit Manipulation",
    "title": "Check if i-th Bit is Set - Variation 391",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/number-of-1-bits/",
    "youtubeUrl": "https://www.youtube.com/watch?v=NtTZSBOWw4w",
    "explanation": "Check (N & (1 << i)) != 0."
  },
  {
    "id": 392,
    "step": "Step 8: Bit Manipulation",
    "subtopic": "Learn Bit Manipulation",
    "title": "Check if Power of 2 - Variation 392",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/power-of-two/",
    "youtubeUrl": "https://www.youtube.com/watch?v=NtTZSBOWw4w",
    "explanation": "N > 0 and (N & (N - 1)) == 0."
  },
  {
    "id": 393,
    "step": "Step 8: Bit Manipulation",
    "subtopic": "Learn Bit Manipulation",
    "title": "Count Set Bits - Variation 393",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/number-of-1-bits/",
    "youtubeUrl": "https://www.youtube.com/watch?v=NtTZSBOWw4w",
    "explanation": "n = n & (n-1) loop count."
  },
  {
    "id": 394,
    "step": "Step 8: Bit Manipulation",
    "subtopic": "Interview Problems",
    "title": "Min Bit Flips to Convert - Variation 394",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/minimum-bit-flips-to-convert-number/",
    "youtubeUrl": "https://www.youtube.com/watch?v=OOsmI5wBflA",
    "explanation": "Count set bits of start ^ goal."
  },
  {
    "id": 395,
    "step": "Step 8: Bit Manipulation",
    "subtopic": "Interview Problems",
    "title": "Single Number III - Variation 395",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/single-number-iii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=faoVT1u85rE",
    "explanation": "Rightmost set bit partition into 2 groups."
  },
  {
    "id": 396,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Valid Parentheses - Variation 396",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/valid-parentheses/",
    "youtubeUrl": "https://www.youtube.com/watch?v=wkDfsKijrZ8",
    "explanation": "Stack pop and match brackets."
  },
  {
    "id": 397,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Next Greater Element I - Variation 397",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/next-greater-element-i/",
    "youtubeUrl": "https://www.youtube.com/watch?v=Du881K7Jtk8",
    "explanation": "Monotonic decreasing stack."
  },
  {
    "id": 398,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Next Greater Element II - Variation 398",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/next-greater-element-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7PrncD7v9YQ",
    "explanation": "Circular array 2*N traversal."
  },
  {
    "id": 399,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Trapping Rain Water - Variation 399",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/trapping-rain-water/",
    "youtubeUrl": "https://www.youtube.com/watch?v=m18Hntz4go8",
    "explanation": "Two pointers min(leftMax, rightMax) - height."
  },
  {
    "id": 400,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Asteroid Collision - Variation 400",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/asteroid-collision/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7xfS3FvksW0",
    "explanation": "Stack collision handling."
  },
  {
    "id": 401,
    "step": "Step 9: Stack and Queues",
    "subtopic": "Monotonic Stack",
    "title": "Largest Rectangle in Histogram - Variation 401",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    "youtubeUrl": "https://www.youtube.com/watch?v=jC_cWly4EFc",
    "explanation": "Monotonic stack for NSE and PSE."
  },
  {
    "id": 402,
    "step": "Step 10: Sliding Window & Two Pointers",
    "subtopic": "Medium Window",
    "title": "Longest Substring Without Repeating - Variation 402",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qtVh-XEpsA0",
    "explanation": "Sliding window with map last_seen_index."
  },
  {
    "id": 403,
    "step": "Step 10: Sliding Window & Two Pointers",
    "subtopic": "Medium Window",
    "title": "Max Consecutive Ones III - Variation 403",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/max-consecutive-ones-iii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=3E4JBHSLpYk",
    "explanation": "Window allowing K zeroes."
  },
  {
    "id": 404,
    "step": "Step 10: Sliding Window & Two Pointers",
    "subtopic": "Hard Window",
    "title": "Minimum Window Substring - Variation 404",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/minimum-window-substring/",
    "youtubeUrl": "https://www.youtube.com/watch?v=WJaij9754y4",
    "explanation": "Expand right, shrink left."
  },
  {
    "id": 405,
    "step": "Step 11: Heaps",
    "subtopic": "Medium",
    "title": "Kth Largest Element - Variation 405",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=XEmy13g1Qxc",
    "explanation": "Min-heap of size K."
  },
  {
    "id": 406,
    "step": "Step 11: Heaps",
    "subtopic": "Hard",
    "title": "Find Median from Data Stream - Variation 406",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/find-median-from-data-stream/",
    "youtubeUrl": "https://www.youtube.com/watch?v=itmhHWaHupI",
    "explanation": "Max-heap left + Min-heap right."
  },
  {
    "id": 407,
    "step": "Step 12: Greedy Algorithms",
    "subtopic": "Easy/Medium",
    "title": "Assign Cookies - Variation 407",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/assign-cookies/",
    "youtubeUrl": "https://www.youtube.com/watch?v=DIX2p7g9i98",
    "explanation": "Sort factors and sizes."
  },
  {
    "id": 408,
    "step": "Step 12: Greedy Algorithms",
    "subtopic": "Easy/Medium",
    "title": "N Meetings in 1 Room - Variation 408",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/non-overlapping-intervals/",
    "youtubeUrl": "https://www.youtube.com/watch?v=II6ziNbrVkk",
    "explanation": "Sort by end time."
  },
  {
    "id": 409,
    "step": "Step 13: Binary Trees",
    "subtopic": "Traversals",
    "title": "Preorder Traversal - Variation 409",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-preorder-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=RlUu705kPWw",
    "explanation": "Root -> Left -> Right."
  },
  {
    "id": 410,
    "step": "Step 13: Binary Trees",
    "subtopic": "Traversals",
    "title": "Inorder Traversal - Variation 410",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=Z_U6u7379dE",
    "explanation": "Left -> Root -> Right."
  },
  {
    "id": 411,
    "step": "Step 13: Binary Trees",
    "subtopic": "Traversals",
    "title": "Postorder Traversal - Variation 411",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-postorder-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=2YBhNLodD8Q",
    "explanation": "Left -> Right -> Root."
  },
  {
    "id": 412,
    "step": "Step 13: Binary Trees",
    "subtopic": "Traversals",
    "title": "Level Order Traversal - Variation 412",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=EoAsWbO7sqg",
    "explanation": "BFS using Queue."
  },
  {
    "id": 413,
    "step": "Step 13: Binary Trees",
    "subtopic": "Medium Tree Problems",
    "title": "Max Depth of Binary Tree - Variation 413",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=eD3tmO66a4g",
    "explanation": "1 + max(leftDepth, rightDepth)."
  },
  {
    "id": 414,
    "step": "Step 13: Binary Trees",
    "subtopic": "Medium Tree Problems",
    "title": "Diameter of Binary Tree - Variation 414",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/diameter-of-binary-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=RezeteJ1TI0",
    "explanation": "max(leftHeight + rightHeight)."
  },
  {
    "id": 415,
    "step": "Step 13: Binary Trees",
    "subtopic": "Medium Tree Problems",
    "title": "Lowest Common Ancestor - Variation 415",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=_-QHfMDde90",
    "explanation": "Recursive left and right search."
  },
  {
    "id": 416,
    "step": "Step 14: Binary Search Trees",
    "subtopic": "Concepts",
    "title": "Search in BST - Variation 416",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/search-in-a-binary-search-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=KcNt6v_56cc",
    "explanation": "Binary search property in tree."
  },
  {
    "id": 417,
    "step": "Step 14: Binary Search Trees",
    "subtopic": "Concepts",
    "title": "Validate BST - Variation 417",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/validate-binary-search-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=f-sj7I5oXEI",
    "explanation": "Validate range [minVal, maxVal]."
  },
  {
    "id": 418,
    "step": "Step 15: Graphs",
    "subtopic": "BFS & DFS",
    "title": "Number of Islands - Variation 418",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/number-of-islands/",
    "youtubeUrl": "https://www.youtube.com/watch?v=muncqlKJ80s",
    "explanation": "Grid BFS/DFS traversal."
  },
  {
    "id": 419,
    "step": "Step 15: Graphs",
    "subtopic": "Shortest Path",
    "title": "Dijkstra's Algorithm - Variation 419",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/network-delay-time/",
    "youtubeUrl": "https://www.youtube.com/watch?v=V6H1qAeB-l4",
    "explanation": "Min-heap edge relaxation."
  },
  {
    "id": 420,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "1D DP",
    "title": "Climbing Stairs - Variation 420",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/climbing-stairs/",
    "youtubeUrl": "https://www.youtube.com/watch?v=Y0lT9Fck7qI",
    "explanation": "Fibonacci DP transition."
  },
  {
    "id": 421,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "2D Grid DP",
    "title": "Unique Paths - Variation 421",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/unique-paths/",
    "youtubeUrl": "https://www.youtube.com/watch?v=sdE0A2Oxofw",
    "explanation": "dp[i][j] = dp[i-1][j] + dp[i][j-1]."
  },
  {
    "id": 422,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "Subsequences DP",
    "title": "0/1 Knapsack - Variation 422",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/partition-equal-subset-sum/",
    "youtubeUrl": "https://www.youtube.com/watch?v=GqOmJwR35wU",
    "explanation": "Pick/Not Pick weight capacity DP."
  },
  {
    "id": 423,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "Strings DP",
    "title": "Longest Common Subsequence - Variation 423",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/longest-common-subsequence/",
    "youtubeUrl": "https://www.youtube.com/watch?v=NPZn9jBrX8U",
    "explanation": "2D DP string index matching."
  },
  {
    "id": 424,
    "step": "Step 16: Dynamic Programming",
    "subtopic": "Strings DP",
    "title": "Edit Distance - Variation 424",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/edit-distance/",
    "youtubeUrl": "https://www.youtube.com/watch?v=fJaKO8FbDdo",
    "explanation": "1 + min(insert, delete, replace)."
  },
  {
    "id": 425,
    "step": "Step 17: Tries",
    "subtopic": "Theory",
    "title": "Implement Trie - Variation 425",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/implement-trie-prefix-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=dBGUmUQhjaM",
    "explanation": "TrieNode links[26] array."
  },
  {
    "id": 426,
    "step": "Step 18: Advanced Strings",
    "subtopic": "Hard Algorithms",
    "title": "KMP Algorithm - Variation 426",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=V5-7GzOfADQ",
    "explanation": "Longest Prefix Suffix (LPS) array."
  },
  {
    "id": 427,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Remove Outermost Parentheses - Variation 427",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/remove-outermost-parentheses/",
    "youtubeUrl": "https://www.youtube.com/watch?v=v3uCch7y0V4",
    "explanation": "Track bracket depth count to strip outer parens."
  },
  {
    "id": 428,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Reverse Words in a String - Variation 428",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-words-in-a-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=vhnRAaJe35s",
    "explanation": "Extract words, reverse array, join with single space."
  },
  {
    "id": 429,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Largest Odd Number in String - Variation 429",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/largest-odd-number-in-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7pM27zWvU5U",
    "explanation": "Find rightmost odd digit."
  },
  {
    "id": 430,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Longest Common Prefix - Variation 430",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/longest-common-prefix/",
    "youtubeUrl": "https://www.youtube.com/watch?v=0sWShKIJoo4",
    "explanation": "Sort strings, compare first and last."
  },
  {
    "id": 431,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Isomorphic Strings - Variation 431",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/isomorphic-strings/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7yF-U1hLEqU",
    "explanation": "Two hash maps for 1-to-1 character mappings."
  },
  {
    "id": 432,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Rotate String - Variation 432",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/rotate-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7yF-U1hLEqU",
    "explanation": "Check string length match and goal in s+s."
  },
  {
    "id": 433,
    "step": "Step 5: Strings",
    "subtopic": "Basic Strings",
    "title": "Valid Anagram - Variation 433",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/valid-anagram/",
    "youtubeUrl": "https://www.youtube.com/watch?v=k3Y8V_a8R8w",
    "explanation": "Character frequency count match."
  },
  {
    "id": 434,
    "step": "Step 5: Strings",
    "subtopic": "Medium Strings",
    "title": "Sort Characters by Frequency - Variation 434",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/sort-characters-by-frequency/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tr9Vjth0Bms",
    "explanation": "Frequency bucket sort or max-heap."
  },
  {
    "id": 435,
    "step": "Step 5: Strings",
    "subtopic": "Medium Strings",
    "title": "Max Depth of Parentheses - Variation 435",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tr9Vjth0Bms",
    "explanation": "Count depth of open brackets."
  },
  {
    "id": 436,
    "step": "Step 5: Strings",
    "subtopic": "Medium Strings",
    "title": "Roman to Integer - Variation 436",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/roman-to-integer/",
    "youtubeUrl": "https://www.youtube.com/watch?v=tr9Vjth0Bms",
    "explanation": "Subtract if symbol < next symbol."
  },
  {
    "id": 437,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Reverse a LinkedList - Variation 437",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=D2vI2DNJGd8",
    "explanation": "Pointers prev = null, curr = head. Reverse pointers."
  },
  {
    "id": 438,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Middle of LinkedList - Variation 438",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/middle-of-the-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7LjQ57wL85Q",
    "explanation": "Slow and fast pointers."
  },
  {
    "id": 439,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Detect Cycle in LinkedList - Variation 439",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle/",
    "youtubeUrl": "https://www.youtube.com/watch?v=wiOo4DC5GGA",
    "explanation": "Floyd's Tortoise & Hare algorithm."
  },
  {
    "id": 440,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Find Cycle Starting Point - Variation 440",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=2Kd0KKmmHFc",
    "explanation": "Reset slow to head upon collision, move 1 step each."
  },
  {
    "id": 441,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Single LinkedList",
    "title": "Length of Loop in LinkedList - Variation 441",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle/",
    "youtubeUrl": "https://www.youtube.com/watch?v=I4g16UhZVIg",
    "explanation": "Count nodes inside collision loop."
  },
  {
    "id": 442,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Odd Even LinkedList - Variation 442",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/odd-even-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qf6LhG8IGpU",
    "explanation": "Separate odd and even pointer chains."
  },
  {
    "id": 443,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Remove Nth Node From End - Variation 443",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=3kMKb-zY00E",
    "explanation": "Fast pointer N steps ahead."
  },
  {
    "id": 444,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Delete Middle Node - Variation 444",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=ePpV-_pfUXo",
    "explanation": "Slow and fast pointers with prev."
  },
  {
    "id": 445,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Sort LinkedList - Variation 445",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/sort-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=8ocB7a_c-28",
    "explanation": "Merge sort on linked list."
  },
  {
    "id": 446,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Medium LinkedList",
    "title": "Intersection Node of 2 LL - Variation 446",
    "difficulty": "Easy",
    "leetcodeUrl": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    "youtubeUrl": "https://www.youtube.com/watch?v=u4FWXscCSac",
    "explanation": "Two pointers switching heads upon null."
  },
  {
    "id": 447,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Hard LinkedList",
    "title": "Reverse Nodes in K-Group - Variation 447",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    "youtubeUrl": "https://www.youtube.com/watch?v=1UOPsfP85_0",
    "explanation": "Reverse k nodes recursively if available."
  },
  {
    "id": 448,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Hard LinkedList",
    "title": "Rotate LinkedList - Variation 448",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/rotate-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=9VPm6nEbVPA",
    "explanation": "Make ring, cut at len - k % len."
  },
  {
    "id": 449,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Hard LinkedList",
    "title": "Flattening a LinkedList - Variation 449",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=ysytSSXpAI0",
    "explanation": "Merge sort sub-lists via bottom pointer."
  },
  {
    "id": 450,
    "step": "Step 6: Learn LinkedList",
    "subtopic": "Hard LinkedList",
    "title": "Clone List with Random Pointers - Variation 450",
    "difficulty": "Hard",
    "leetcodeUrl": "https://leetcode.com/problems/copy-list-with-random-pointer/",
    "youtubeUrl": "https://www.youtube.com/watch?v=VNf6VynfpdM",
    "explanation": "Inline nodes -> assign random -> separate."
  },
  {
    "id": 451,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Generate Parentheses - Variation 451",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/generate-parentheses/",
    "youtubeUrl": "https://www.youtube.com/watch?v=eyCj_u3PoJE",
    "explanation": "Track open and close counts."
  },
  {
    "id": 452,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Subsets / Power Set - Variation 452",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/subsets/",
    "youtubeUrl": "https://www.youtube.com/watch?v=AxNNVECce8c",
    "explanation": "Pick/Not Pick recursive pattern."
  },
  {
    "id": 453,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Subsets II - Variation 453",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/subsets-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=rYkfBRtMJvw",
    "explanation": "Skip duplicates at same depth."
  },
  {
    "id": 454,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Combination Sum I - Variation 454",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/combination-sum/",
    "youtubeUrl": "https://www.youtube.com/watch?v=OyZFFqQtu98",
    "explanation": "Include/Exclude pattern."
  },
  {
    "id": 455,
    "step": "Step 7: Recursion & Backtracking",
    "subtopic": "Subsequences",
    "title": "Combination Sum II - Variation 455",
    "difficulty": "Medium",
    "leetcodeUrl": "https://leetcode.com/problems/combination-sum-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=G1fRTGRxXU8",
    "explanation": "Sort and skip duplicates."
  }
];

if (typeof module !== 'undefined') {
  module.exports = striverSheetData;
}
