/**
 * Mux playback IDs.
 *
 * All three have a public playback policy and HLS only — no static MP4
 * renditions — so they are attached through `attachMux` (see lib/mux.ts) rather
 * than as a plain <source>. If MP4 renditions are enabled later nothing here
 * needs to change; attachMux would simply gain a cheaper path.
 */
export const VIDEOS = {
  homeHero: "6bBI5RRISNrZzRucDyCQx4QFsKSEEp5eyia022pn01clI",
  founders: "UgnOFxf8FHUmPC9Mf02ehyhd3WGO7ZNEWcif1p4BPd2U",
  embeddedCapability: "TIISDboUb664jSHRCTOGQ67SR1r53qlhg01ry7s1J1Qc",
} as const;
