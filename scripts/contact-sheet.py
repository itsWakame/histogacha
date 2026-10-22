# 把 50 张肖像拼成一张联系表，方便一次性人工核对
import json
import os
from PIL import Image, ImageDraw

FIG = 'assets/figures'
OUT = 'data/contact-sheet.jpg'

ORDER = [
    'napoleon', 'caesar', 'alexander', 'joan', 'elizabeth1', 'louis14',
    'catherine2', 'victoria', 'washington', 'lincoln', 'churchill', 'nero',
    'copernicus', 'galileo', 'newton', 'darwin', 'pasteur', 'tesla',
    'curie', 'einstein', 'turing', 'ada', 'franklin', 'leonardo',
    'michelangelo', 'caravaggio', 'rembrandt', 'vangogh', 'monet', 'picasso',
    'kahlo', 'mozart', 'beethoven', 'freddie', 'shakespeare', 'austen',
    'poe', 'dickens', 'hugo', 'wilde', 'dostoevsky', 'tolstoy',
    'dickinson', 'woolf', 'hemingway', 'caligula', 'bathory', 'robespierre',
    'borgia', 'merrick',
]

COLS, CELL_W, CELL_H, LABEL_H, PAD = 10, 150, 180, 22, 6
rows = (len(ORDER) + COLS - 1) // COLS
W = COLS * (CELL_W + PAD) + PAD
H = rows * (CELL_H + LABEL_H + PAD) + PAD

sheet = Image.new('RGB', (W, H), (247, 242, 232))
d = ImageDraw.Draw(sheet)

missing = []
for i, name in enumerate(ORDER):
    r, c = divmod(i, COLS)
    x = PAD + c * (CELL_W + PAD)
    y = PAD + r * (CELL_H + LABEL_H + PAD)
    path = os.path.join(FIG, f'{name}.jpg')
    if not os.path.exists(path):
        missing.append(name)
        d.rectangle([x, y, x + CELL_W, y + CELL_H], outline=(200, 0, 0), width=2)
    else:
        try:
            im = Image.open(path).convert('RGB')
            # 等比裁剪填充
            sw, sh = im.size
            scale = max(CELL_W / sw, CELL_H / sh)
            nw, nh = int(sw * scale + 1), int(sh * scale + 1)
            im = im.resize((nw, nh))
            left = (nw - CELL_W) // 2
            top = max(0, int((nh - CELL_H) * 0.12))
            im = im.crop((left, top, left + CELL_W, top + CELL_H))
            sheet.paste(im, (x, y))
        except Exception as e:
            missing.append(f'{name}({e})')
            d.rectangle([x, y, x + CELL_W, y + CELL_H], outline=(200, 0, 0), width=2)
    d.text((x + 2, y + CELL_H + 4), name, fill=(30, 25, 20))

sheet.save(OUT, quality=88)
print('saved', OUT, sheet.size, 'missing:', missing or 'none')