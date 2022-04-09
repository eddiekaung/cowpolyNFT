import json
import random


for i in range(20):
  num = random.randint(0, 7)
  cow = "Cow"
  if num == 6 or num == 7:
    cow = "Not Cow"
  data = {"name": "Cowpoly #{0}".format(i),
    "tokenID": i, "description":  "Cowpoly is an experimental NFT collection created for educational purpose only. Credits for all artwork go to original creators.",
    "image": "https://github.com/eddiekaung/cowpolyNFT/raw/main/images/{0}.jpg".format(num),
    "attributes": [
      {"trait_type": "Type", "value": cow}
    ]}
  with open('{0}.json'.format(i), 'w') as f:
      json.dump(data, f)