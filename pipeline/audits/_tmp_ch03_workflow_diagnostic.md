# Temporary Chapter 3 Workflow Diagnostic

- converter: success
- source anchors: success
- dependency install: success
- build: success
- validation: failure

## converter log
```
converter patch complete
```

## source log
```
source anchor patch complete
```

## install log
```

added 1 package, and audited 2 packages in 472ms

found 0 vulnerabilities
```

## build log
```
Built docs/chapters/03-neuroscience.html from source/chapters/ch03-neuroscience-biological-bases.md
```

## validate log
```
Traceback (most recent call last):
  File "<stdin>", line 11, in <module>
RuntimeError: missing: id="classic-study-henry-molaison-hm-and-medial-temporal-memory-systems"
```
