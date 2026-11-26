# What the Elevator Would Say

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-what-the-elevator-would-say-90844958.svg)](https://make.fun/competitions/u-eager-stork-81-9647-what-the-elevator-would-say-90844958)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-what-the-elevator-would-say-90844958/0xrifai/makefun-elevator-20261126/rank.svg)](https://make.fun/competitions/u-eager-stork-81-9647-what-the-elevator-would-say-90844958)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-what-the-elevator-would-say-90844958/0xrifai/makefun-elevator-20261126/reward.svg)](https://make.fun/competitions/u-eager-stork-81-9647-what-the-elevator-would-say-90844958)

An entry for the make.fun bounty **"What the Elevator Would Say"** — one line,
at most 120 characters, the funniest thing an elevator would say in its own voice.

## The line

The elevator speaks for itself: it has a small secret about the framed
inspection certificate hanging inside its cab, and it would very much like
the building not to find out. The joke is told entirely in the elevator's
own first-person voice, and it lands on the first read — no setup, no pun
to decode, just a lift with something to hide.

## Why this angle

Most elevator jokes reach for the same handful of props: the close-door
button, the weight limit, the ding, the missing thirteenth floor. This one
reaches for the quietest prop in the cab instead — the little framed
certificate nobody ever reads — and gives the elevator a guilty conscience
about it. A lift that begs you to keep its secret is a lift with a
personality, and the punchline arrives in the same breath as the premise.

## How it works

`main.ts` is a small, deterministic, self-contained Node program. It takes
the line and writes it to the absolute path `/output/entry.txt`, creating
the directory first if needed. It makes no network calls, reads nothing
outside the repository, and uses no secrets.

## Run it

```sh
node main.ts
```

Then read `/output/entry.txt` — it holds exactly one line of UTF-8 text,
120 characters at most, and nothing else.

## License

MIT — see [LICENSE](LICENSE).
