

var codons = {
	'Phe' : ['ttt', 'ttc'],
	'Leu' : ['tta', 'ttg', 'ctt', 'ctc', 'cta', 'ctg'],
	'Ile' : ['att', 'atc', 'ata'],
	'Met' : ['atg'],
	'Val' : ['gtt', 'gtc', 'gta', 'gtg'],
	'Ser' : ['tct', 'tcc', 'tca', 'tcg'],
	'Pro' : ['cct', 'ccc', 'cca', 'ccg'],
	'Thr' : ['act', 'acc', 'aca', 'acg'],
	'Ala' : ['gct', 'gcc', 'gca', 'gcg'],
	'Tyr' : ['tat', 'tac'],
	'stop' : ['taa', 'tag', 'tga'],
	'His' : ['cat', 'cac'],
	'Gln' : ['caa', 'cag'],
	'Asn' : ['aat', 'aac'],
	'Lys' : ['aaa', 'aag'],
	'Asp' : ['gat', 'gac'],
	'Glu' : ['gaa', 'gag'],
	'Cys' : ['tgt', 'tgc'],
	'Trp' : ['tgg'],
	'Arg' : ['cgt', 'cgc', 'cga', 'cgg', 'aga', 'agg'],
	'Ser' : ['agt', 'agc'],
	'Gly' : ['ggt', 'ggc', 'gga', 'ggg']
}

function forInTest () {
  var aminoacids ="";
  for (var codon in codons) { //codon is key
    for (var i = 0; i < codons[codon].length; i++) {
      if (temprna == codons[codon][i]) {
        aminoacids += codon;
      }
    }
    // console.log("codon", codon, "is", codons[codon]);
  }
  return aminoacids;
}

var temprna = "gaa";

console.log(forInTest())

//for var codon in codons
//if codons[temprna]
