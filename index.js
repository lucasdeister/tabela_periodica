function exibirContainerDados() {
    document.getElementsByClassName('container_dados')[0].style.visibility = 'visible';
}

function preencherDadosTabela(obj) {

  let id = 0;
  const elementoClicado = event.target.closest('.elemento');
  const simbolo = elementoClicado.querySelector('.simbolo').textContent;

  for (let i = 0; i < tabelaPeriodica.length; i++) {
    if (tabelaPeriodica[i].simbolo === simbolo) {
      id = i;
      break;
    }
  }

  const container_dados = document.getElementsByClassName('container_dados')[0];
  
  if(container_dados.style.visibility == ''){
    exibirContainerDados();
  }
    document.querySelector('#nome_elemento').innerHTML = obj[id].elemento;
    document.querySelector('#simbolo_elemento').innerHTML = obj[id].simbolo;
    document.querySelector('#numero_elemento').innerHTML = obj[id].numero;
    document.querySelector('#massa_elemento').innerHTML = obj[id].massa;
    document.querySelector('#configuracao_elemento').innerHTML = obj[id].configuracao;
}

const tabelaPeriodica = [
    {
        elemento: 'Hidrogênio',
        simbolo: 'H',
        numero: 1,
        massa: 1.008,
        configuracao: '1s1'
    },
    {
        elemento: 'Hélio',
        simbolo: 'He',
        numero: 2,
        massa: 4.003,
        configuracao: '1s2'
    },
    {
        elemento: 'Lítio',
        simbolo: 'Li',
        numero: 3,
        massa: 6.941,
        configuracao: '[He] 2s1'
    },
    {
        elemento: 'Berílio',
        simbolo: 'Be',
        numero: 4,
        massa: 9.012,
        configuracao: '[He] 2s2'
    },
    {
        elemento: 'Boro',
        simbolo: 'B',
        numero: 5,
        massa: 10.81,
        configuracao: '[He] 2s2 2p1'
    },
    {
        elemento: 'Carbono',
        simbolo: 'C',
        numero: 6,
        massa: 12.01,
        configuracao: '[He] 2s2 2p2'
    },
    {
        elemento: 'Nitrogênio',
        simbolo: 'N',
        numero: 7,
        massa: 14.01,
        configuracao: '[He] 2s2 2p3'
    },
    {
        elemento: 'Oxigênio',
        simbolo: 'O',
        numero: 8,
        massa: 16.00,
        configuracao: '[He] 2s2 2p4'
    },
    {
        elemento: 'Flúor',
        simbolo: 'F',
        numero: 9,
        massa: 19.00,
        configuracao: '[He] 2s2 2p5'
    },
    {
        elemento: 'Neônio',
        simbolo: 'Ne',
        numero: 10,
        massa: 20.18,
        configuracao: '[He] 2s2 2p6'
    },
    {
        elemento: 'Sódio',
        simbolo: 'Na',
        numero: 11,
        massa: 22.99,
        configuracao: '[Ne] 3s1'
    },
    {
        elemento: 'Magnésio',
        simbolo: 'Mg',
        numero: 12,
        massa: 24.31,
        configuracao: '[Ne] 3s2'
    },
    {
        elemento: 'Alumínio',
        simbolo: 'Al',
        numero: 13,
        massa: 26.98,
        configuracao: '[Ne] 3s2 3p1'
    },
    {
        elemento: 'Silício',
        simbolo: 'Si',
        numero: 14,
        massa: 28.09,
        configuracao: '[Ne] 3s2 3p2'
    },
    {
        elemento: 'Fósforo',
        simbolo: 'P',
        numero: 15,
        massa: 30.97,
        configuracao: '[Ne] 3s2 3p3'
    },
    {
        elemento: 'Enxofre',
        simbolo: 'S',
        numero: 16,
        massa: 32.06,
        configuracao: '[Ne] 3s2 3p4'
    },
    {
        elemento: 'Cloro',
        simbolo: 'Cl',
        numero: 17,
        massa: 35.45,
        configuracao: '[Ne] 3s2 3p5'
    },
    {
        elemento: 'Argônio',
        simbolo: 'Ar',
        numero: 18,
        massa: 39.95,
        configuracao: '[Ne] 3s2 3p6'
    },
    {
        elemento: 'Potássio',
        simbolo: 'K',
        numero: 19,
        massa: 39.10,
        configuracao: '[Ar] 4s1'
    },
    {
        elemento: 'Cálcio',
        simbolo: 'Ca',
        numero: 20,
        massa: 40.08,
        configuracao: '[Ar] 4s2'
    },
    {
        elemento: 'Escândio',
        simbolo: 'Sc',
        numero: 21,
        massa: 44.96,
        configuracao: '[Ar] 3d1 4s2'
    },
    {
        elemento: 'Titânio',
        simbolo: 'Ti',
        numero: 22,
        massa: 47.87,
        configuracao: '[Ar] 3d2 4s2'
    },
    {
        elemento: 'Vanádio',
        simbolo: 'V',
        numero: 23,
        massa: 50.94,
        configuracao: '[Ar] 3d3 4s2'
    },
    {
        elemento: 'Crômio',
        simbolo: 'Cr',
        numero: 24,
        massa: 52.00,
        configuracao: '[Ar] 3d5 4s1'
    },
    {
        elemento: 'Manganês',
        simbolo: 'Mn',
        numero: 25,
        massa: 54.94,
        configuracao: '[Ar] 3d5 4s2'
    },
    {
        elemento: 'Ferro',
        simbolo: 'Fe',
        numero: 26,
        massa: 55.85,
        configuracao: '[Ar] 3d6 4s2'
    },
    {
        elemento: 'Cobalto',
        simbolo: 'Co',
        numero: 27,
        massa: 58.93,
        configuracao: '[Ar] 3d7 4s2'
      },
      {
        elemento: 'Níquel',
        simbolo: 'Ni',
        numero: 28,
        massa: 58.69,
        configuracao: '[Ar] 3d8 4s2'
      },
      {
        elemento: 'Cobre',
        simbolo: 'Cu',
        numero: 29,
        massa: 63.55,
        configuracao: '[Ar] 3d10 4s1'
      },
      {
        elemento: 'Zinco',
        simbolo: 'Zn',
        numero: 30,
        massa: 65.38,
        configuracao: '[Ar] 3d10 4s2'
      },
      {
        elemento: 'Gálio',
        simbolo: 'Ga',
        numero: 31,
        massa: 69.72,
        configuracao: '[Ar] 3d10 4s2 4p1'
      },
      {
        elemento: 'Germânio',
        simbolo: 'Ge',
        numero: 32,
        massa: 72.63,
        configuracao: '[Ar] 3d10 4s2 4p2'
      },
      {
        elemento: 'Arsênio',
        simbolo: 'As',
        numero: 33,
        massa: 74.92,
        configuracao: '[Ar] 3d10 4s2 4p3'
      },
      {
        elemento: 'Selênio',
        simbolo: 'Se',
        numero: 34,
        massa: 78.96,
        configuracao: '[Ar] 3d10 4s2 4p4'
      },
      {
        elemento: 'Bromo',
        simbolo: 'Br',
        numero: 35,
        massa: 79.90,
        configuracao: '[Ar] 3d10 4s2 4p5'
      },
      {
        elemento: 'Criptônio',
        simbolo: 'Kr',
        numero: 36,
        massa: 83.80,
        configuracao: '[Ar] 3d10 4s2 4p6'
      },
      {
        elemento: 'Rubídio',
        simbolo: 'Rb',
        numero: 37,
        massa: 85.47,
        configuracao: '[Kr] 5s1'
      },
      {
        elemento: 'Estrôncio',
        simbolo: 'Sr',
        numero: 38,
        massa: 87.62,
        configuracao: '[Kr] 5s2'
      },
      {
        elemento: 'Ítrio',
        simbolo: 'Y',
        numero: 39,
        massa: 88.91,
        configuracao: '[Kr] 4d1 5s2'
      },
      {
        elemento: 'Zircônio',
        simbolo: 'Zr',
        numero: 40,
        massa: 91.22,
        configuracao: '[Kr] 4d2 5s2'
      },
      {
        elemento: 'Nióbio',
        simbolo: 'Nb',
        numero: 41,
        massa: 92.91,
        configuracao: '[Kr] 4d4 5s1'
      },
      {
        elemento: 'Molibdênio',
        simbolo: 'Mo',
        numero: 42,
        massa: 95.94,
        configuracao: '[Kr] 4d5 5s1'
      },
      {
        elemento: 'Tecnécio',
        simbolo: 'Tc',
        numero: 43,
        massa: 98.00,
        configuracao: '[Kr] 4d5 5s2'
      },
      {
        elemento: 'Rutênio',
        simbolo: 'Ru',
        numero: 44,
        massa: 101.07,
        configuracao: '[Kr] 4d7 5s1'
      },
      {
        elemento: 'Ródio',
        simbolo: 'Rh',
        numero: 45,
        massa: 102.91,
        configuracao: '[Kr] 4d8 5s1'
      },
      {
        elemento: 'Paládio',
        simbolo: 'Pd',
        numero: 46,
        massa: 106.42,
        configuracao: '[Kr] 4d10'
      },
      {
        elemento: 'Prata',
        simbolo: 'Ag',
        numero: 47,
        massa: 107.87,
        configuracao: '[Kr] 4d10 5s1'
      },
      {
        elemento: 'Cádmio',
        simbolo: 'Cd',
        numero: 48,
        massa: 112.41,
        configuracao: '[Kr] 4d10 5s2'
      },
      {
        elemento: 'Índio',
        simbolo: 'In',
        numero: 49,
        massa: 114.82,
        configuracao: '[Kr] 4d10 5s2 5p1'
      },
      {
        elemento: 'Estanho',
        simbolo: 'Sn',
        numero: 50,
        massa: 118.71,
        configuracao: '[Kr] 4d10 5s2 5p2'
      },
      {
        elemento: 'Antimônio',
        simbolo: 'Sb',
        numero: 51,
        massa: 121.76,
        configuracao: '[Kr] 4d10 5s2 5p3'
      },
      {
        elemento: 'Telúrio',
        simbolo: 'Te',
        numero: 52,
        massa: 127.60,
        configuracao: '[Kr] 4d10 5s2 5p4'
      },
      {
        elemento: 'Iodo',
        simbolo: 'I',
        numero: 53,
        massa: 126.90,
        configuracao: '[Kr] 4d10 5s2 5p5'
      },
      {
        elemento: 'Xenônio',
        simbolo: 'Xe',
        numero: 54,
        massa: 131.29,
        configuracao: '[Kr] 4d10 5s2 5p6'
      },
      {
        elemento: 'Césio',
        simbolo: 'Cs',
        numero: 55,
        massa: 132.91,
        configuracao: '[Xe] 6s1'
      },
      {
        elemento: 'Bário',
        simbolo: 'Ba',
        numero: 56,
        massa: 137.33,
        configuracao: '[Xe] 6s2'
      },
      {
        elemento: 'Lantânio',
        simbolo: 'La',
        numero: 57,
        massa: 138.91,
        configuracao: '[Xe] 5d1 6s2'
      },
      {
        elemento: 'Cério',
        simbolo: 'Ce',
        numero: 58,
        massa: 140.12,
        configuracao: '[Xe] 4f1 5d1 6s2'
      },
      {
        elemento: 'Praseodímio',
        simbolo: 'Pr',
        numero: 59,
        massa: 140.91,
        configuracao: '[Xe] 4f3 6s2'
      },
      {
        elemento: 'Neodímio',
        simbolo: 'Nd',
        numero: 60,
        massa: 144.24,
        configuracao: '[Xe] 4f4 6s2'
      },
      {
        elemento: 'Promécio',
        simbolo: 'Pm',
        numero: 61,
        massa: 145.00,
        configuracao: '[Xe] 4f5 6s2'
      },
      {
        elemento: 'Samário',
        simbolo: 'Sm',
        numero: 62,
        massa: 150.36,
        configuracao: '[Xe] 4f6 6s2'
      },
      {
        elemento: 'Európio',
        simbolo: 'Eu',
        numero: 63,
        massa: 151.96,
        configuracao: '[Xe] 4f7 6s2'
      },
      {
        elemento: 'Gadolínio',
        simbolo: 'Gd',
        numero: 64,
        massa: 157.25,
        configuracao: '[Xe] 4f7 5d1 6s2'
      },
      {
        elemento: 'Térbio',
        simbolo: 'Tb',
        numero: 65,
        massa: 158.93,
        configuracao: '[Xe] 4f9 6s2'
      },
      {
        elemento: 'Disprósio',
        simbolo: 'Dy',
        numero: 66,
        massa: 162.50,
        configuracao: '[Xe] 4f10 6s2'
      },
      {
        elemento: 'Hólmio',
        simbolo: 'Ho',
        numero: 67,
        massa: 164.93,
        configuracao: '[Xe] 4f11 6s2'
      },
      {
        elemento: 'Érbio',
        simbolo: 'Er',
        numero: 68,
        massa: 167.26,
        configuracao: '[Xe] 4f12 6s2'
      },
      {
        elemento: 'Túlio',
        simbolo: 'Tm',
        numero: 69,
        massa: 168.93,
        configuracao: '[Xe] 4f13 6s2'
      },
      {
        elemento: 'Itérbio',
        simbolo: 'Yb',
        numero: 70,
        massa: 173.05,
        configuracao: '[Xe] 4f14 6s2'
      },
      {
        elemento: 'Lutécio',
        simbolo: 'Lu',
        numero: 71,
        massa: 174.967,
        configuracao: '[Xe] 4f14 5d1 6s2'
      },
      {
        elemento: 'Háfnio',
        simbolo: 'Hf',
        numero: 72,
        massa: 178.49,
        configuracao: '[Xe] 4f14 5d2 6s2'
      },
      {
        elemento: 'Tântalo',
        simbolo: 'Ta',
        numero: 73,
        massa: 180.948,
        configuracao: '[Xe] 4f14 5d3 6s2'
      },
      {
        elemento: 'Tungstênio',
        simbolo: 'W',
        numero: 74,
        massa: 183.84,
        configuracao: '[Xe] 4f14 5d4 6s2'
      },
      {
        elemento: 'Rênio',
        simbolo: 'Re',
        numero: 75,
        massa: 186.207,
        configuracao: '[Xe] 4f14 5d5 6s2'
      },
      {
        elemento: 'Ósmio',
        simbolo: 'Os',
        numero: 76,
        massa: 190.23,
        configuracao: '[Xe] 4f14 5d6 6s2'
      },
      {
        elemento: 'Irídio',
        simbolo: 'Ir',
        numero: 77,
        massa: 192.217,
        configuracao: '[Xe] 4f14 5d7 6s2'
      },
      {
        elemento: 'Platina',
        simbolo: 'Pt',
        numero: 78,
        massa: 195.084,
        configuracao: '[Xe] 4f14 5d9 6s1'
      },
      {
        elemento: 'Ouro',
        simbolo: 'Au',
        numero: 79,
        massa: 196.967,
        configuracao: '[Xe] 4f14 5d10 6s1'
      },
      {
        elemento: 'Mercúrio',
        simbolo: 'Hg',
        numero: 80,
        massa: 200.592,
        configuracao: '[Xe] 4f14 5d10 6s2'
      },
      {
        elemento: 'Tálio',
        simbolo: 'Tl',
        numero: 81,
        massa: 204.38,
        configuracao: '[Xe] 4f14 5d10 6s2 6p1'
      },
      {
        elemento: 'Chumbo',
        simbolo: 'Pb',
        numero: 82,
        massa: 207.2,
        configuracao: '[Xe] 4f14 5d10 6s2 6p2'
      },
      {
        elemento: 'Bismuto',
        simbolo: 'Bi',
        numero: 83,
        massa: 208.980,
        configuracao: '[Xe] 4f14 5d10 6s2 6p3'
      },
      {
        elemento: 'Polônio',
        simbolo: 'Po',
        numero: 84,
        massa: 209.0,
        configuracao: '[Xe] 4f14 5d10 6s2 6p4'
      },
      {
        elemento: 'Astato',
        simbolo: 'At',
        numero: 85,
        massa: 210.0,
        configuracao: '[Xe] 4f14 5d10 6s2 6p5'
      },
      {
        elemento: 'Rádon',
        simbolo: 'Rn',
        numero: 86,
        massa: 222.018,
        configuracao: '[Xe] 4f14 5d10 6s2 6p6'
      },
      {
        elemento: 'Frâncio',
        simbolo: 'Fr',
        numero: 87,
        massa: 223.0,
        configuracao: '[Rn] 7s1'
      },
      {
        elemento: 'Rádio',
        simbolo: 'Ra',
        numero: 88,
        massa: 226.03,
        configuracao: '[Rn] 7s2'
      },
      {
        elemento: 'Actínio',
        simbolo: 'Ac',
        numero: 89,
        massa: 227.028,
        configuracao: '[Rn] 6d1 7s2'
      },
      {
        elemento: 'Tório',
        simbolo: 'Th',
        numero: 90,
        massa: 232.038,
        configuracao: '[Rn] 6d2 7s2'
      },
      {
        elemento: 'Protactínio',
        simbolo: 'Pa',
        numero: 91,
        massa: 231.036,
        configuracao: '[Rn] 5f2 6d1 7s2'
      },
      {
        elemento: 'Urânio',
        simbolo: 'U',
        numero: 92,
        massa: 238.029,
        configuracao: '[Rn] 5f3 6d1 7s2'
      },
      {
        elemento: 'Netúnio',
        simbolo: 'Np',
        numero: 93,
        massa: 237.048,
        configuracao: '[Rn] 5f4 6d1 7s2'
      },
      {
        elemento: 'Plutônio',
        simbolo: 'Pu',
        numero: 94,
        massa: 244.064,
        configuracao: '[Rn] 5f6 7s2'
      },
      {
        elemento: 'Amerício',
        simbolo: 'Am',
        numero: 95,
        massa: 243.061,
        configuracao: '[Rn] 5f7 7s2'
      },
      {
        elemento: 'Cúrio',
        simbolo: 'Cm',
        numero: 96,
        massa: 247.070,
        configuracao: '[Rn] 5f7 6d1 7s2'
      },
      {
        elemento: 'Berquélio',
        simbolo: 'Bk',
        numero: 97,
        massa: 247.070,
        configuracao: '[Rn] 5f9 7s2'
      },
      {
        elemento: 'Califórnio',
        simbolo: 'Cf',
        numero: 98,
        massa: 251.080,
        configuracao: '[Rn] 5f10 7s2'
      },
      {
        elemento: 'Einstênio',
        simbolo: 'Es',
        numero: 99,
        massa: 252.083,
        configuracao: '[Rn] 5f11 7s2'
      },
      {
        elemento: 'Férmio',
        simbolo: 'Fm',
        numero: 100,
        massa: 257.095,
        configuracao: '[Rn] 5f12 7s2'
      },
      {
        elemento: 'Mendelévio',
        simbolo: 'Md',
        numero: 101,
        massa: 258.099,
        configuracao: '[Rn] 5f13 7s2'
      },
      {
        elemento: 'Nobélio',
        simbolo: 'No',
        numero: 102,
        massa: 259.101,
        configuracao: '[Rn] 5f14 7s2'
      },
      {
        elemento: 'Laurêncio',
        simbolo: 'Lr',
        numero: 103,
        massa: 262.114,
        configuracao: '[Rn] 5f14 6d1 7s2'
      },
      {
        elemento: 'Rutherfórdio',
        simbolo: 'Rf',
        numero: 104,
        massa: 267.122,
        configuracao: '[Rn] 5f14 6d2 7s2'
      },
      {
        elemento: 'Dúbnio',
        simbolo: 'Db',
        numero: 105,
        massa: 270.133,
        configuracao: '[Rn] 5f14 6d3 7s2'
      },
      {
        elemento: 'Seabórgio',
        simbolo: 'Sg',
        numero: 106,
        massa: 271.134,
        configuracao: '[Rn] 5f14 6d4 7s2'
      },
      {
        elemento: 'Bóhrio',
        simbolo: 'Bh',
        numero: 107,
        massa: 270.133,
        configuracao: '[Rn] 5f14 6d5 7s2'
      },
      {
        elemento: 'Hássio',
        simbolo: 'Hs',
        numero: 108,
        massa: 277.152,
        configuracao: '[Rn] 5f14 6d6 7s2'
      },
      {
        elemento: 'Meitnério',
        simbolo: 'Mt',
        numero: 109,
        massa: 278.156,
        configuracao: '[Rn] 5f14 6d7 7s2'
      },
      {
        elemento: 'Darmstádtio',
        simbolo: 'Ds',
        numero: 110,
        massa: 281.167,
        configuracao: '[Rn] 5f14 6d8 7s2'
      },
      {
        elemento: 'Roentgênio',
        simbolo: 'Rg',
        numero: 111,
        massa: 282.169,
        configuracao: '[Rn] 5f14 6d9 7s2'
      },
      {
        elemento: 'Copernício',
        simbolo: 'Cn',
        numero: 112,
        massa: 285.177,
        configuracao: '[Rn] 5f14 6d10 7s2'
      },
      {
        elemento: 'Nihônio',
        simbolo: 'Nh',
        numero: 113,
        massa: 286.181,
        configuracao: '[Rn] 5f14 6d10 7s2 7p1'
      },
      {
        elemento: 'Fleróvio',
        simbolo: 'Fl',
        numero: 114,
        massa: 289,
        configuracao: '[Rn] 5f14 6d10 7s2 7p2'
      },
      {
        elemento: 'Moscóvio',
        simbolo: 'Mc',
        numero: 115,
        massa: 288,
        configuracao: '[Rn] 5f14 6d10 7s2 7p3'
      },
      {
        elemento: 'Livermório',
        simbolo: 'Lv',
        numero: 116,
        massa: 293,
        configuracao: '[Rn] 5f14 6d10 7s2 7p4'
      },
      {
        elemento: 'Tennesso',
        simbolo: 'Ts',
        numero: 117,
        massa: 294,
        configuracao: '[Rn] 5f14 6d10 7s2 7p5'
      },
      {
        elemento: 'Oganessônio',
        simbolo: 'Og',
        numero: 118,
        massa: 294,
        configuracao: '[Rn] 5f14 6d10 7s2 7p6'
      }
]