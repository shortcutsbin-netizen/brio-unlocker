# V56 presentation helper map

1012 executable blocks,714 functions,1586 comments; zero missing purpose annotations and unchanged vendored parser. [Complete map](v56-source-map.json).

| Helper | Source line |
|---|---:|
| `v56ReconSidebarLayout` | 367 |
| `v56ReconResizeEnd` | 374 |
| `v56ReconResizeMove` | 382 |
| `v56ReconResizeStart` | 388 |
| `v55ReconShow` | 396 |
| `v55ReconChecklist` | 413 |
| `drawNativeInv` | 2621 |

Recorder helpers intentionally remain v55 and byte-identical; new v56 functions own only sidebar layout/resize listener lifecycle. drawNativeInv changes materials-only gap/centering. Sidebar width has a separate UI key; progress storage/revision are unchanged. No new collection experiment or reset.
