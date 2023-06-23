# riskuj hra

demo https://riskuj.prikasky.cz/

Televizní hra Riskuj je všem velice dobře známá. Je několik hráčů, kteří si vybírají otázky z různých okruhů, na které by chtěli zodpovědět. Jedná se o vědomostní otázky kde s počtem bodů za zodpovězení stoupá i obtížnost.
Otázky a témata jsou **importovány z questions.json**, proto je nutné použít live server např na VS code.

![vzhled hry](https://github.com/prikaskyy/riskuj/assets/133920148/500129a5-8522-4878-a814-a5921c1465fa)

Po kliknutím na políčko katergorie nebo otázky se přehraje zvukový efekt a otevře modální okno.
Modální okno obshauje:
- uprostřed otázku, která je importována z .json souboru
- vlevo nahoře časomíru
- vpravo nahoře iconu na zavření modálního okna
- vlevo dole ovládání časomíry - po přečtení se zmáčkne start a časomíra se spustí po vypršení časového limutu se přehraje zvukový efekt; tlačítko konec slouží k ukončení časomíry v případě rychlé a správné odpovědi
- vpravo dole jsou tlačítka na smazaní/obnovení daného políčka, aby jsme  vědeli, která políčka jsme již zodpověděli.

![image](https://github.com/prikaskyy/riskuj/assets/133920148/6c07023f-845e-4edc-9d31-eab776657931)
