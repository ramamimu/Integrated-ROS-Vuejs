# bs2022-baru

## Pre-Required to run basestation

- install Nodejs (v17.7.1 `recommended`)

- install NPM (Node Package Manager) (8.5.4 `recommended`)

- using browser

## Project setup

### Download project

```
git clone https://github.com/ramamimu/Integrated-ROS-Vuejs.git
```

or Download via .zip on github

then type this on directory download / clone which containing folder publix, src,file README and more ...

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve

```

### How to stop program in terminal

```
ctrl + c
```

### Kriteria Penilaian dan clue

- Program harus menggunakan OOP
- Komunikasi dengan basestation menggunakan **rosbridge_server**
- input menggunakan keyboard untuk menggerakkan robot
- gerak atas,bawah,kanan,kiri,putar kanan, dan putar kiri
- Pengelolaan node harus ada minimal 1 node untuk komunikasi ROS dengan basestation dan node pengelolaan data posisi robot
- Pastikan BS dan ROS terkoneksi dengan baik
- Get attention on your port !
- Kesepakatan BS pada port 9900
- Untuk keperluan message bisa dilihat di src/App.vue baris 56 sampai 77
- testcase untuk mendeteksi bola
