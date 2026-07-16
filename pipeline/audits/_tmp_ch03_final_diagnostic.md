# Temporary Chapter 3 Final-Build Diagnostic

- patch: success
- install: success
- build: success
- validate: failure

## patch
```
old wrapper count in tail: 1
new wrapper count in tail: 0
old boundary count: 1
new boundary count: 0
#section-4-the-bodys-stress-response--fast-and-slow-coordination 1 #section-4-the-bodys-stress-response-fast-and-slow-coordination 0
#section-1-how-neurons-talk--structure-and-the-action-potential 1 #section-1-how-neurons-talk-structure-and-the-action-potential 0
```

## install
```

added 1 package, and audited 2 packages in 425ms

found 0 vulnerabilities
```

## build
```
Built docs/chapters/03-neuroscience.html from source/chapters/ch03-neuroscience-biological-bases.md
```

## validate
```
hm id False
split id False
sidebar True
do-not-confuse count True
classic count True
figures True
questions True
missing anchors: ['classic-study-henry-molaison-hm-and-medial-temporal-memory-systems', 'do-not-confuse-hemispheric-specialization-vs-the-left-brainright-brain-personality-myth']
Traceback (most recent call last):
  File "<stdin>", line 20, in <module>
RuntimeError: failed checks=['hm id', 'split id']; missing=['classic-study-henry-molaison-hm-and-medial-temporal-memory-systems', 'do-not-confuse-hemispheric-specialization-vs-the-left-brainright-brain-personality-myth']
```
