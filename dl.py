import os

website_url = "movies4u.report"
for x in range(19000, 20001):
    link = f'https://new.m4u.lol/{x}/x'
    title = f'Download link {x} - {website_url}'
    output = f'Range_{19000}-{20000}.exe'
    
    with open(output, 'a') as f:
        f.write(f'{title}\n')
        f.write(f'{link}\n')
        f.write('\n')

print(f'Download links have been saved to {output}')