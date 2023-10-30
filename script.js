var links = [
    "https://wa.me/19998324619?text=Nome completo do(a) jovem:%0aNúmero de contato:%0aIdade:%0aSérie:%0aTurno da escola:%0aCidade:%0aBairro:%0aTem alguma qualificação? (Cursos de inglês, informática, técnicos...):%0aNome completo do(a) responsável:%0aNúmero de contato do(a) responsável:%0aÁrea das vagas que teria interesse:"];
    function openWpp() {
        var ranIdx = Math.random()*links.length;
        ranIdx = parseInt(ranIdx, 10);
        var link = links[ranIdx];

        window.open(link);
    }