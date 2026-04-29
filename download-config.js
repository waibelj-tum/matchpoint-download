window.MATCHPOINT_DOWNLOAD_CONFIG = {
  owner: "waibelj-tum",
  repository: "matchpoint-download",
  productName: "Matchpoint",
  latestRelease: "v0.2.0",
  releases: [
    {
      version: "v0.2.0",
      assets: {
        windows: {
          label: "Download for Windows",
          fileName: "Matchpoint_0.2.0_x64-setup.exe",
          helper: "Direct installer download",
        },
        macos: {
          label: "Download for macOS (Apple Silicon)",
          fileName: "Matchpoint_0.2.0_aarch64.dmg",
          helper: "For M1, M2, M3, and newer Macs",
        },
      },
    },
  ],
};
