import re
import json

html = open('rentgeocar.html', 'r', encoding='utf-8').read()
# Let's find any large JSON object
# usually in Livewire it's wire:initial-data="..."
matches = re.findall(r'wire:initial-data="([^"]+)"', html)
if matches:
    import html as html_lib
    data = json.loads(html_lib.unescape(matches[0]))
    # print the structure keys to understand
    # print(data.keys())
    # often it's under serverMemo -> data
    # print(data.get('serverMemo', {}).get('data'))
    pass

# Or let's just find the pattern "name":"..." and "preview-..."
cars = re.findall(r'(\w+(?:\s+\w+)*)(?:.*?)preview-([a-z0-9]+)\.webp', html)

# Actually, the user wants me to use the exact images from the screenshots. The easiest way for me is to just download the rentgeocar.com images manually or use placeholder logic that returns the absolute URLs from rentgeocar.com!
# I can just use a generic search and manually match them from the output of the first script!
# Wait, let me just extract all preview images and their context.
contexts = re.findall(r'(.{0,100}preview-[0-9a-f]+\.webp.{0,100})', html)
for c in contexts:
    print(c)
