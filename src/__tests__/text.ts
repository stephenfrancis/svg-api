
import Text from "../main/Text";


test("chopTextToFitWidth", () => {
  const text1 = "When you walk through the storm, hold your head up high, and don't be afraid of the dark.";
  expect(Text.chopTextToFitWidth(text1, 10, 1000)).toEqual([ text1 ]);
  expect(Text.chopTextToFitWidth(text1, 10, 100)).toEqual([
    "When you walk throu",
    "gh the storm, hold y",
    "our head up high, an",
    "d don't be afraid of",
    " the dark.",
  ]);
  expect(Text.chopTextToFitWidth(text1, 10, 100, true)).toEqual([
    "When you walk",
    "through the storm,",
    "hold your head up",
    "high, and don't be",
    "afraid of the dark.",
  ]);

  const text2 = "England expects that every man will do his duty without fear or favour";
  expect(Text.chopTextToFitWidth(text2, 10, 100, true)).toEqual([
    "England expects",
    "that every man will",
    "do his duty without",
    "fear or favour",
  ]);

  const text3 = "Jenkins said that antidisestablishmentarianism is a pointless word, when the term reactionary fart is synonymous";
  expect(Text.chopTextToFitWidth(text3, 10, 100, true)).toEqual([
    "Jenkins said that",
    "antidisestablishment",
    "arianism is a",
    "pointless word,",
    "when the term",
    "reactionary fart is",
    "synonymous",
  ]);
});
