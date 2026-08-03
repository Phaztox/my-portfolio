# NAS images

Drop image files here, then reference them from `data/projects.ts` as an
`image` block:

    { type: 'image',
      src: '/images/nas/dashboard.png',
      alt: 'OpenMediaVault dashboard showing container status, disk temperatures and CPU load',
      width: 1614, height: 921,
      caption: 'The dashboard on an average morning.' }

`width` and `height` must be the file's real pixel dimensions - next/image uses
them to reserve space so the page does not jump while the image loads.

Before adding anything: check it for public IP addresses, hostnames, domains,
ports and credentials. Private 192.168.x.x addresses are harmless; a global
IPv6 address is not.
