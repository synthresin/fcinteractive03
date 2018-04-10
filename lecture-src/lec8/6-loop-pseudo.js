loop(food = 0; foodNeeded = 10) {
  if (food = foodNeeded) {
    exit loop; // 음식이 충분하니 그만두고 집에 간다.
  } else {
    food += 2 // 음식 2개를 더 모으고, 다시 반복을 수행한다.
  }
}
