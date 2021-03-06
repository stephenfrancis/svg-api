import TextBox from "../main/TextBox";

test("chopTextToFitWidth", () => {
  const text1 =
    "When you walk through the storm, hold your head up high, and don't be afraid of the dark.";
  expect(TextBox.chopTextToFitWidth(text1, 10, 1000)).toEqual([text1]);
  expect(TextBox.chopTextToFitWidth(text1, 10, 100)).toEqual([
    "When you walk throug",
    "h the storm, hold you",
    "r head up high, and d",
    "on't be afraid of the ",
    "dark.",
  ]);
  expect(TextBox.chopTextToFitWidth(text1, 10, 100, true)).toEqual([
    "When you walk",
    "through the storm,",
    "hold your head up",
    "high, and don't be",
    "afraid of the dark.",
  ]);

  const text2 =
    "England expects that every man will do his duty without fear or favour";
  expect(TextBox.chopTextToFitWidth(text2, 10, 100, true)).toEqual([
    "England expects that",
    "every man will do",
    "his duty without fear",
    "or favour",
  ]);

  const text3 =
    "Jenkins said that antidisestablishmentarianism is a pointless word, when the term reactionary fart is synonymous";
  expect(TextBox.chopTextToFitWidth(text3, 10, 100, true)).toEqual([
    "Jenkins said that",
    "antidisestablishmentaria",
    "nism is a pointless",
    "word, when the term",
    "reactionary fart is",
    "synonymous",
  ]);
});
