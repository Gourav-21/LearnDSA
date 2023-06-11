const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/chat-bison-001";
const API_KEY = "AIzaSyAf2Js1O8g0a52IewAI-2pGxQP_K47p_1E";

const client = new DiscussServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const context = "you are a teacher ";
const examples = [
  {
    "input": {
      "content": "explain the solution  of the problem with code in java\n\nSort Colors\nMedium\n15K\n534\nCompanies\nGiven an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.\n\nWe will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.\n\nYou must solve this problem without using the library's sort function."
    },
    "output": {
      "content": "To solve the \"Sort Colors\" problem in Java, you can use the Dutch National Flag algorithm, which is a simple and efficient solution. Here's the step-by-step explanation and code:\n\nStep 1: Initialize three pointers: low, mid, and high.\n\nlow: Points to the starting index of the sorted colors (red).\nmid: Iterates through the array.\nhigh: Points to the ending index of the sorted colors (blue).\nStep 2: Iterate through the array while mid <= high.\n\nIf nums[mid] is 0 (red), swap it with nums[low], increment both mid and low pointers.\nIf nums[mid] is 1 (white), leave it as it is, and increment the mid pointer.\nIf nums[mid] is 2 (blue), swap it with nums[high], decrement the high pointer.\nStep 3: Repeat Step 2 until mid <= high.\n\nHere's the Java code implementing the above steps:\n\n\npublic class Solution {\n    public void sortColors(int[] nums) {\n        int low = 0;\n        int mid = 0;\n        int high = nums.length - 1;\n\n        while (mid <= high) {\n            if (nums[mid] == 0) {\n                swap(nums, low, mid);\n                low++;\n                mid++;\n            } else if (nums[mid] == 1) {\n                mid++;\n            } else if (nums[mid] == 2) {\n                swap(nums, mid, high);\n                high--;\n            }\n        }\n    }\n\n    private void swap(int[] nums, int i, int j) {\n        int temp = nums[i];\n        nums[i] = nums[j];\n        nums[j] = temp;\n    }\n}\nThe sortColors method takes an array nums as input and sorts it in place according to the problem requirements. The swap method is a helper function used to swap elements in the array.\n\nBy using the Dutch National Flag algorithm, this solution has a time complexity of O(n), where n is the length of the input array nums."
    }
  },
  {
    "input": {
      "content": "explain the solution  of the problem with code in java\n\nMinimum Size Subarray Sum\nMedium\n9.4K\n261\nCompanies\nGiven an array of positive integers nums and a positive integer target, return the minimal length of a \nsubarray\n whose sum is greater than or equal to target. If there is no such subarray, return 0 instead."
    },
    "output": {
      "content": "To solve the \"Minimum Size Subarray Sum\" problem in Java, you can follow these steps:\n\nInitialize two pointers, start and end, both pointing to the first element of the array nums.\nInitialize a variable minLength to store the minimum length of the subarray. Set its initial value to a number larger than the length of the array, for example, Integer.MAX_VALUE.\nInitialize a variable sum to store the current sum of the subarray. Set its initial value to 0.\nIterate the end pointer from 0 to the last index of the array nums:\nAdd nums[end] to the sum variable.\nWhile sum is greater than or equal to the target:\nUpdate minLength if the current subarray length (end - start + 1) is smaller than minLength.\nSubtract nums[start] from sum.\nIncrement the start pointer.\nAfter the iteration, if minLength is still Integer.MAX_VALUE, it means no subarray was found. Return 0 in this case. Otherwise, return minLength.\nHere's the Java code implementing the above steps:\n\npublic int minSubArrayLen(int target, int[] nums) {\n    int start = 0;\n    int end = 0;\n    int minLength = Integer.MAX_VALUE;\n    int sum = 0;\n\n    for (; end < nums.length; end++) {\n        sum += nums[end];\n        while (sum >= target) {\n            minLength = Math.min(minLength, end - start + 1);\n            sum -= nums[start];\n            start++;\n        }\n    }\n\n    return minLength == Integer.MAX_VALUE ? 0 : minLength;\n}"
    }
  }
];
const messages = [
  {
    "content": "Minimum Window Substring\nHard\n15K\n634\nCompanies\nGiven two strings s and t of lengths m and n respectively, return the minimum window \nsubstring\n of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string \"\".\n\nThe testcases will be generated such that the answer is unique."
  },
  {
    "content": "To solve the \"Minimum Window Substring\" problem in Java, you can use the sliding window algorithm. Here's the step-by-step explanation and code:\n\nStep 1: Initialize two pointers, left and right, both pointing to the beginning of the string s.\nStep 2: Initialize a map mp to store the frequency of each character in the string t.\nStep 3: Initialize a variable minLen to store the minimum length of the window. Set its initial value to Integer.MAX_VALUE.\nStep 4: Iterate the right pointer from 0 to the length of the string s:\nAdd the character at the current index of the string s to the map mp.\nIf the character at the current index of the string s is present in the string t, increment the frequency of the character in the map mp.\nIf the frequency of the character in the map mp is equal to the number of times the character appears in the string t, update minLen if the current window length (right - left + 1) is smaller than minLen.\nIncrement the right pointer.\nStep 5: After the iteration, if minLen is still Integer.MAX_VALUE, it means no window was found. Return the empty string \"\" in this case. Otherwise, return the substring of s from the left pointer to the right pointer.\nHere's the Java code implementing the above steps:\n\npublic String minWindowSubstring(String s, String t) {\n    int left = 0;\n    int right = 0;\n    Map<Character, Integer> mp = new HashMap<>();\n    int minLen = Integer.MAX_VALUE;\n\n    for (int i = 0; i < s.length(); i++) {\n        mp.put(s.charAt(i), mp.getOrDefault(s.charAt(i), 0) + 1);\n        if (mp.get(s.charAt(i)) == t.length()) {\n            minLen = Math.min(minLen, i - left + 1);\n        }\n        while (mp.get(s.charAt(right)) > 0) {\n            mp.put(s.charAt(right), mp.get(s.charAt(right)) - 1);\n            right++;\n        }\n        if (i - left + 1 < minLen) {\n            left = right;\n        }\n    }\n\n    return minLen == Integer.MAX_VALUE ? \"\" : s.substring(left, right + 1);\n}"
  },
  {
    "content": "can u explain the code"
  },
  {
    "content": "Sure. The code first initializes two pointers, left and right, both pointing to the beginning of the string s. Then, it initializes a map mp to store the frequency of each character in the string t. Next, it initializes a variable minLen to store the minimum length of the window. Set its initial value to Integer.MAX_VALUE.\n\nAfter that, the code iterates the right pointer from 0 to the length of the string s. For each character in the string s, the code adds the character to the map mp. If the character is present in the string t, the code increments the frequency of the character in the map mp. If the frequency of the character in the map mp is equal to the number of times the character appears in the string t, the code updates minLen if the current window length (right - left + 1) is smaller than minLen. Finally, the code increments the right pointer.\n\nAfter the iteration, if minLen is still Integer.MAX_VALUE, it means no window was found. In this case, the code returns the empty string \"\". Otherwise, the code returns the substring of s from the left pointer to the right pointer.\n\nThe code works by sliding a window of size t.length over the string s. For each character in the window, the code checks if the character is present in the string t. If it is, the code increments the frequency of the character in the map mp. If the frequency of the character in the map mp is equal to the number of times the character appears in the string t, the code updates minLen if the current window length (right - left + 1) is smaller than minLen. This ensures that the window always contains all the characters in the string t.\n\nThe code also keeps track of the left pointer. The left pointer is the index of the first character in the window that is not present in the string t. If the left pointer is equal to the right pointer, it means that the window does not contain all the characters in the string t. In this case, the code moves the right pointer to the next character in the string s and updates the map mp.\n\nThe code continues to slide the window over the string s until the left pointer is equal to the right pointer. At this point, the code has found a window that contains all the characters in the string t. The code returns the substring of s from the left pointer to the right pointer."
  }
];

messages.push({ "content": "NEXT REQUEST" });

client.generateMessage({
  // required, which model to use to generate the result
  model: MODEL_NAME,
  // optional, 0.0 always uses the highest-probability result
  temperature: 0.25,
  // optional, how many candidate results to generate
  candidateCount: 1,
  // optional, number of most probable tokens to consider for generation
  top_k: 40,
  // optional, for nucleus sampling decoding strategy
  top_p: 0.95,
  prompt: {
    // optional, sent on every request and prioritized over history
    context: context,
    // optional, examples to further finetune responses
    examples: examples,
    // required, alternating prompt/response messages
    messages: messages,
  },
}).then((result) => {
  console.log(JSON.stringify(result, null, 2));
});