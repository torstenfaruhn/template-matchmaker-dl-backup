import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const templates = [
  { naam: "E101A", artikelen: ["L"], preview: "E101A.jpg" },
  { naam: "E102A", artikelen: ["XL"], preview: "E102A.jpg" },
  { naam: "E103A", artikelen: ["XXL"], preview: "E103A.jpg" },
  { naam: "E104N", artikelen: ["M_nws"], preview: "E104N.jpg" },
  { naam: "E105N", artikelen: ["L"], preview: "E105N.jpg" },
  { naam: "E201A", artikelen: ["L", "S_nws"], preview: "E201A.jpg" },
  { naam: "E202A", artikelen: ["M_lk", "M_nws"], preview: "E202A.jpg" },
  { naam: "E203F", artikelen: ["L", "XS"], preview: "E203F.jpg" },
  { naam: "E204A", artikelen: ["L", "S_nws"], preview: "E204A.jpg" },
  { naam: "E204B", artikelen: ["L", "S_nws"], preview: "E204B.jpg" },
  { naam: "E204C", artikelen: ["L", "S_nws"], preview: "E204C.jpg" },
  { naam: "E204D", artikelen: ["L", "S_nws"], preview: "E204D.jpg" },
  { naam: "E205I", artikelen: ["M_nws", "L"], preview: "E205I.jpg" },
  { naam: "E205I variant 1", artikelen: ["M_lk", "L"], preview: "E205I.jpg" },
  { naam: "E206A", artikelen: ["L", "M_nws"], preview: "E206A.jpg" },
  { naam: "E206A variant 1", artikelen: ["L", "M_lk"], preview: "E206A.jpg" },
  { naam: "E206E", artikelen: ["L", "M_nws"], preview: "E206E.jpg" },
  { naam: "E206E variant 1", artikelen: ["L", "M_lk"], preview: "E206E.jpg" },
  { naam: "E206G", artikelen: ["L", "M_nws"], preview: "E206G.jpg" },
  { naam: "E206G variant 1", artikelen: ["L", "M_lk"], preview: "E206G.jpg" },
  { naam: "E206H", artikelen: ["L", "M_nws"], preview: "E206H.jpg" },
  { naam: "E206H variant 1", artikelen: ["L", "M_lk"], preview: "E206H.jpg" },
  { naam: "E207K", artikelen: ["L", "S_nws"], preview: "E207K.jpg" },
  { naam: "E301A", artikelen: ["L", "XS", "XS"], preview: "E301A.jpg" },
  { naam: "E302A", artikelen: ["M_nws", "XS", "S_nws"], preview: "E302A.jpg" },
  { naam: "E302A variant 1", artikelen: ["M_lk", "XS", "S_nws"], preview: "E302A.jpg" },
  { naam: "E302B", artikelen: ["M_nws", "XS", "S_nws"], preview: "E302B.jpg" },
  { naam: "E302B variant 1", artikelen: ["M_lk", "XS", "S_nws"], preview: "E302B.jpg" },
  { naam: "E302C", artikelen: ["M_nws", "XS", "S_nws"], preview: "E302C.jpg" },
  { naam: "E302C variant 1", artikelen: ["M_lk", "XS", "S_nws"], preview: "E302C.jpg" },
  { naam: "E303D", artikelen: ["M_nws", "XS", "S_nws"], preview: "E303D.jpg" },
  { naam: "E303D variant 1", artikelen: ["M_lk", "XS", "S_nws"], preview: "E303D.jpg" },
  { naam: "E304A", artikelen: ["S_nws", "S_lk", "S_nws"], preview: "E304A.jpg" },
  { naam: "E304A variant 1", artikelen: ["S_lk", "S_lk", "S_nws"], preview: "E304A.jpg" },
  { naam: "E304A variant 2", artikelen: ["S_nws", "S_nws", "S_nws"], preview: "E304A.jpg" },
  { naam: "E304A variant 3", artikelen: ["S_lk", "S_nws", "S_nws"], preview: "E304A.jpg" },
  { naam: "E304B", artikelen: ["S_nws", "S_lk", "S_nws"], preview: "E304B.jpg" },
  { naam: "E304B variant 1", artikelen: ["S_lk", "S_lk", "S_nws"], preview: "E304B.jpg" },
  { naam: "E304B variant 2", artikelen: ["S_nws", "S_nws", "S_nws"], preview: "E304B.jpg" },
  { naam: "E304B variant 3", artikelen: ["S_lk", "S_nws", "S_nws"], preview: "E304B.jpg" },
  { naam: "E304C", artikelen: ["S_nws", "S_lk", "S_nws"], preview: "E304C.jpg" },
  { naam: "E304C variant 1", artikelen: ["S_lk", "S_lk", "S_nws"], preview: "E304C.jpg" },
  { naam: "E304C variant 2", artikelen: ["S_nws", "S_nws", "S_nws"], preview: "E304C.jpg" },
  { naam: "E304C variant 3", artikelen: ["S_lk", "S_nws", "S_nws"], preview: "E304C.jpg" },
  { naam: "E304D", artikelen: ["S_nws", "S_lk", "S_nws"], preview: "E304D.jpg" },
  { naam: "E304D variant 1", artikelen: ["S_lk", "S_lk", "S_nws"], preview: "E304D.jpg" },
  { naam: "E304D variant 2", artikelen: ["S_nws", "S_nws", "S_nws"], preview: "E304D.jpg" },
  { naam: "E304D variant 3", artikelen: ["S_lk", "S_nws", "S_nws"], preview: "E304D.jpg" },
  { naam: "E305A", artikelen: ["L", "M_nws", "XS"], preview: "E305A.jpg" },
  { naam: "E305A variant 1", artikelen: ["L", "M_lk", "XS"], preview: "E305A.jpg" },
  { naam: "E306A", artikelen: ["L", "S_nws", "XS"], preview: "E306A.jpg" },
  { naam: "E306A variant 1", artikelen: ["L", "S_lk", "XS"], preview: "E306A.jpg" },
  { naam: "S101A", artikelen: ["XL"], preview: "S101A.jpg" },
  { naam: "S102A", artikelen: ["XXL"], preview: "S102A.jpg" },
  { naam: "S201F", artikelen: ["XL", "XS"], preview: "S201F.jpg" },
  { naam: "S202F", artikelen: ["XXL", "XS"], preview: "S202F.jpg" },
  { naam: "S203A", artikelen: ["XL", "S_nws"], preview: "S203A.jpg" },
  { naam: "S203B", artikelen: ["XL", "S_nws"], preview: "S203B.jpg" },
  { naam: "S203C", artikelen: ["XL", "S_nws"], preview: "S203C.jpg" },
  { naam: "S203D", artikelen: ["XL", "S_nws"], preview: "S203D.jpg" },
  { naam: "S204A", artikelen: ["XXL", "S_nws"], preview: "S204A.jpg" },
  { naam: "S204B", artikelen: ["XXL", "S_nws"], preview: "S204B.jpg" },
  { naam: "S204C", artikelen: ["XXL", "S_nws"], preview: "S204C.jpg" },
  { naam: "S204D", artikelen: ["XXL", "S_nws"], preview: "S204D.jpg" },
  { naam: "S205H", artikelen: ["XXL", "S_nws"], preview: "S205H.jpg" },
  { naam: "S205H variant 1", artikelen: ["XXL", "S_lk"], preview: "S205H.jpg" },
  { naam: "S205K", artikelen: ["XXL", "S_nws"], preview: "S205K.jpg" },
  { naam: "S206A", artikelen: ["XXL", "M_nws"], preview: "S206A.jpg" },
  { naam: "S206A variant 1", artikelen: ["XXL", "M_lk"], preview: "S206A.jpg" },
  { naam: "S206E", artikelen: ["XXL", "M_nws"], preview: "S206E.jpg" },
  { naam: "S206E variant 1", artikelen: ["XXL", "M_lk"], preview: "S206E.jpg" },
  { naam: "S206G", artikelen: ["XXL", "M_nws"], preview: "S206G.jpg" },
  { naam: "S206G variant 1", artikelen: ["XXL", "M_lk"], preview: "S206G.jpg" },
  { naam: "S206H", artikelen: ["XXL", "M_nws"], preview: "S206H.jpg" },
  { naam: "S206H variant 1", artikelen: ["XXL", "M_lk"], preview: "S206H.jpg" },
  { naam: "S207A", artikelen: ["XXL", "L"], preview: "S207A.jpg" },
  { naam: "S208M", artikelen: ["XL", "M_lk"], preview: "S208M.jpg" },
  { naam: "S209A", artikelen: ["XL", "L"], preview: "S209A.jpg" },
  { naam: "S209I", artikelen: ["XL", "L"], preview: "S209I.jpg" },
  { naam: "S301A", artikelen: ["XL", "XS", "XS"], preview: "S301A.jpg" },
  { naam: "S302A", artikelen: ["XXL", "XS", "XS"], preview: "S302A.jpg" },
  { naam: "S303A", artikelen: ["XXL", "S_nws", "XS"], preview: "S303A.jpg" },
  { naam: "S303A variant 1", artikelen: ["XXL", "S_lk", "XS"], preview: "S303A.jpg" },
  { naam: "S304A", artikelen: ["XXL", "S_nws", "S_lk"], preview: "S304A.jpg" },
  { naam: "S305A", artikelen: ["XXL", "M_nws", "XS"], preview: "S305A.jpg" },
  { naam: "S305A variant 1", artikelen: ["XXL", "M_lk", "XS"], preview: "S305A.jpg" },
  { naam: "S306A", artikelen: ["XL", "S_nws", "M_nws"], preview: "S306A.jpg" },
  { naam: "S306A variant 1", artikelen: ["XL", "S_lk", "M_nws"], preview: "S306A.jpg" },
  { naam: "S307A", artikelen: ["XL", "M_nws", "M_lk"], preview: "S307A.jpg" },
  { naam: "S307A variant 1", artikelen: ["XL", "M_nws", "M_nws"], preview: "S307A.jpg" },
  { naam: "S308F", artikelen: ["L", "M_nws", "XS"], preview: "S308F.jpg" },
  { naam: "S308F variant 1", artikelen: ["L", "M_lk", "XS"], preview: "S308F.jpg" },
  { naam: "S309A", artikelen: ["L", "M_nws", "S_nws"], preview: "S309A.jpg" },
  { naam: "S309A variant 1", artikelen: ["L", "M_lk", "S_nws"], preview: "S309A.jpg" },
  { naam: "S309B", artikelen: ["L", "M_nws", "S_nws"], preview: "S309B.jpg" },
  { naam: "S309B variant 1", artikelen: ["L", "M_lk", "S_nws"], preview: "S309B.jpg" },
  { naam: "S309C", artikelen: ["L", "M_nws", "S_nws"], preview: "S309C.jpg" },
  { naam: "S309C variant 1", artikelen: ["L", "M_lk", "S_nws"], preview: "S309C.jpg" },
  { naam: "S309D", artikelen: ["L", "M_nws", "S_nws"], preview: "S309D.jpg" },
  { naam: "S309D variant 1", artikelen: ["L", "M_lk", "S_nws"], preview: "S309D.jpg" },
  { naam: "S310F", artikelen: ["XXL", "M_nws", "XS"], preview: "S310F.jpg" },
  { naam: "S310F variant 1", artikelen: ["XXL", "M_lk", "XS"], preview: "S310F.jpg" },
  { naam: "S311A", artikelen: ["XXL", "M_nws", "S_nws"], preview: "S311A.jpg" },
  { naam: "S311A variant 1", artikelen: ["XXL", "M_lk", "S_nws"], preview: "S311A.jpg" },
  { naam: "S311B", artikelen: ["XXL", "M_nws", "S_nws"], preview: "S311B.jpg" },
  { naam: "S311B variant 1", artikelen: ["XXL", "M_lk", "S_nws"], preview: "S311B.jpg" },
  { naam: "S311C", artikelen: ["XXL", "M_nws", "S_nws"], preview: "S311C.jpg" },
  { naam: "S311C variant 1", artikelen: ["XXL", "M_lk", "S_nws"], preview: "S311C.jpg" },
  { naam: "S311D", artikelen: ["XXL", "M_nws", "S_nws"], preview: "S311D.jpg" },
  { naam: "S311D variant 1", artikelen: ["XXL", "M_lk", "S_nws"], preview: "S311D.jpg" },
  { naam: "S312H", artikelen: ["L", "M_nws", "M_nws"], preview: "S312H.jpg" },
  { naam: "S312H variant 1", artikelen: ["L", "M_lk", "M_nws"], preview: "S312H.jpg" },
  { naam: "S312H variant 2", artikelen: ["L", "M_lk", "M_lk"], preview: "S312H.jpg" },
  { naam: "S312H variant 3", artikelen: ["L", "M_nws", "M_lk"], preview: "S312H.jpg" },
  { naam: "S313H", artikelen: ["L", "L", "M_nws"], preview: "S313H.jpg" },
  { naam: "S313H variant 1", artikelen: ["L", "L", "M_lk"], preview: "S313H.jpg" },
  { naam: "S314K", artikelen: ["L", "M_nws", "S_nws"], preview: "S314K.jpg" },
  { naam: "S314K variant 1", artikelen: ["L", "M_lk", "S_nws"], preview: "S314K.jpg" },
  { naam: "S315K", artikelen: ["L", "L", "S_nws"], preview: "S315K.jpg" },
  { naam: "S316A", artikelen: ["L", "L", "M_nws"], preview: "S316A.jpg" },
  { naam: "S316A variant 1", artikelen: ["L", "L", "M_lk"], preview: "S316A.jpg" },
  { naam: "S317J", artikelen: ["L", "M_lk", "M_nws"], preview: "S317J.jpg" },
  { naam: "S317L", artikelen: ["L", "M_lk", "M_nws"], preview: "S317L.jpg" },
  { naam: "S318L", artikelen: ["M_lk", "M_lk", "M_nws"], preview: "S318L.jpg" },
  { naam: "S319N", artikelen: ["L", "L", "M_nws"], preview: "S319N.jpg" },
  { naam: "S319N variant 1", artikelen: ["L", "L", "M_lk"], preview: "S319N.jpg" },
  { naam: "S320I", artikelen: ["XL", "L", "M_nws"], preview: "S320I.jpg" },
  { naam: "S320I variant 1", artikelen: ["XL", "L", "M_lk"], preview: "S320I.jpg" },
  { naam: "S321M", artikelen: ["L", "L", "M_nws"], preview: "S321M.jpg" },
  { naam: "S321M variant 1", artikelen: ["L", "L", "M_lk"], preview: "S321M.jpg" },
  { naam: "S322M", artikelen: ["XL", "L", "M_nws"], preview: "S322M.jpg" },
  { naam: "S322M variant 1", artikelen: ["XL", "L", "M_lk"], preview: "S322M.jpg" },
  { naam: "S323E", artikelen: ["L", "L", "M_nws"], preview: "S323E.jpg" },
  { naam: "S323E variant 1", artikelen: ["L", "L", "M_lk"], preview: "S323E.jpg" },
  { naam: "S323G", artikelen: ["L", "L", "M_nws"], preview: "S323G.jpg" },
  { naam: "S323G variant 1", artikelen: ["L", "L", "M_lk"], preview: "S323G.jpg" },
  { naam: "S323H", artikelen: ["L", "L", "M_nws"], preview: "S323H.jpg" },
  { naam: "S323H variant 1", artikelen: ["L", "L", "M_lk"], preview: "S323H.jpg" },
  { naam: "S324E", artikelen: ["XL", "L", "M_nws"], preview: "S324E.jpg" },
  { naam: "S324E variant 1", artikelen: ["XL", "L", "M_lk"], preview: "S324E.jpg" },
  { naam: "S324G", artikelen: ["XL", "L", "M_nws"], preview: "S324G.jpg" },
  { naam: "S324G variant 1", artikelen: ["XL", "L", "M_lk"], preview: "S324G.jpg" },
  { naam: "S324H", artikelen: ["XL", "L", "M_nws"], preview: "S324H.jpg" },
  { naam: "S324H variant 1", artikelen: ["XL", "L", "M_lk"], preview: "S324H.jpg" },
  { naam: "S325K", artikelen: ["L", "L", "S_nws"], preview: "S325K.jpg" },
  { naam: "S326K", artikelen: ["XL", "L", "S_nws"], preview: "S326K.jpg" },
  { naam: "S327A", artikelen: ["L", "M_nws", "L"], preview: "S327A.jpg" },
  { naam: "S327A variant 1", artikelen: ["L", "M_lk", "L"], preview: "S327A.jpg" },
  { naam: "S328A", artikelen: ["XL", "M_nws", "L"], preview: "S328A.jpg" },
  { naam: "S328A variant 1", artikelen: ["XL", "M_lk", "L"], preview: "S328A.jpg" },
  { naam: "S329A", artikelen: ["XXL", "M_nws", "L"], preview: "S329A.jpg" },
  { naam: "S329A variant 1", artikelen: ["XXL", "M_lk", "L"], preview: "S329A.jpg" },
  { naam: "S330N", artikelen: ["L", "L", "S_nws"], preview: "S330N.jpg" },
  { naam: "S401A", artikelen: ["L", "M_nws", "XS", "XS"], preview: "S401A.jpg" },
  { naam: "S401A variant 1", artikelen: ["L", "M_lk", "XS", "XS"], preview: "S401A.jpg" },
  { naam: "S402A", artikelen: ["XXL", "M_nws", "XS", "XS"], preview: "S402A.jpg" },
  { naam: "S402A variant 1", artikelen: ["XXL", "M_lk", "XS", "XS"], preview: "S402A.jpg" },
  { naam: "S403F", artikelen: ["L", "M_nws", "XS", "XS"], preview: "S403F.jpg" },
  { naam: "S403F variant 1", artikelen: ["L", "M_lk", "XS", "XS"], preview: "S403F.jpg" },
  { naam: "S404A", artikelen: ["L", "M_nws", "S_nws", "XS"], preview: "S404A.jpg" },
  { naam: "S404A variant 1", artikelen: ["L", "M_lk", "S_nws", "XS"], preview: "S404A.jpg" },
  { naam: "S404B", artikelen: ["L", "M_nws", "S_nws", "XS"], preview: "S404B.jpg" },
  { naam: "S404B variant 1", artikelen: ["L", "M_lk", "S_nws", "XS"], preview: "S404B.jpg" },
  { naam: "S404C", artikelen: ["L", "M_nws", "S_nws", "XS"], preview: "S404C.jpg" },
  { naam: "S404C variant 1", artikelen: ["L", "M_lk", "S_nws", "XS"], preview: "S404C.jpg" },
  { naam: "S404D", artikelen: ["L", "M_nws", "S_nws", "XS"], preview: "S404D.jpg" },
  { naam: "S404D variant 1", artikelen: ["L", "M_lk", "S_nws", "XS"], preview: "S404D.jpg" },
  { naam: "S405A", artikelen: ["XXL", "M_nws", "S_nws", "XS"], preview: "S405A.jpg" },
  { naam: "S405A variant 1", artikelen: ["XXL", "M_lk", "S_nws", "XS"], preview: "S405A.jpg" },
  { naam: "S405B", artikelen: ["XXL", "M_nws", "S_nws", "XS"], preview: "S405B.jpg" },
  { naam: "S405B variant 1", artikelen: ["XXL", "M_lk", "S_nws", "XS"], preview: "S405B.jpg" },
  { naam: "S405C", artikelen: ["XXL", "M_nws", "S_nws", "XS"], preview: "S405C.jpg" },
  { naam: "S405C variant 1", artikelen: ["XXL", "M_lk", "S_nws", "XS"], preview: "S405C.jpg" },
  { naam: "S405D", artikelen: ["XXL", "M_nws", "S_nws", "XS"], preview: "S405D.jpg" },
  { naam: "S405D variant 1", artikelen: ["XXL", "M_lk", "S_nws", "XS"], preview: "S405D.jpg" },
  { naam: "S406E", artikelen: ["L", "M_nws", "S_lk", "S_nws"], preview: "S406E.jpg" },
  { naam: "S406E variant 1", artikelen: ["L", "M_lk", "S_lk", "S_nws"], preview: "S406E.jpg" },
  { naam: "S406G", artikelen: ["L", "M_nws", "S_lk", "S_nws"], preview: "S406G.jpg" },
  { naam: "S406G variant 1", artikelen: ["L", "M_lk", "S_lk", "S_nws"], preview: "S406G.jpg" },
  { naam: "S406H", artikelen: ["L", "M_nws", "S_lk", "S_nws"], preview: "S406H.jpg" },
  { naam: "S406H variant 1", artikelen: ["L", "M_lk", "S_lk", "S_nws"], preview: "S406H.jpg" },
  { naam: "S407A", artikelen: ["L", "M_nws", "S_lk", "S_nws"], preview: "S407A.jpg" },
  { naam: "S407A variant 1", artikelen: ["L", "M_lk", "S_lk", "S_nws"], preview: "S407A.jpg" },
  { naam: "S408A", artikelen: ["L", "M_nws", "M_nws", "XS"], preview: "S408A.jpg" },
  { naam: "S408A variant 1", artikelen: ["L", "M_lk", "M_lk", "XS"], preview: "S408A.jpg" },
  { naam: "S408A variant 2", artikelen: ["L", "M_nws", "M_lk", "XS"], preview: "S408A.jpg" },
  { naam: "S408A variant 3", artikelen: ["L", "M_lk", "M_nws", "XS"], preview: "S408A.jpg" },
  { naam: "S409E", artikelen: ["L", "L", "M_nws", "S_nws"], preview: "S409E.jpg" },
  { naam: "S409E variant 1", artikelen: ["L", "L", "M_lk", "S_nws"], preview: "S409E.jpg" },
  { naam: "S409G", artikelen: ["L", "L", "M_nws", "S_nws"], preview: "S409G.jpg" },
  { naam: "S409G variant 1", artikelen: ["L", "L", "M_lk", "S_nws"], preview: "S409G.jpg" },
  { naam: "S410E", artikelen: ["L", "M_lk", "M_nws", "M_nws"], preview: "S410E.jpg" },
  { naam: "S410E variant 1", artikelen: ["L", "M_lk", "M_nws", "M_lk"], preview: "S410E.jpg" },
  { naam: "S410G", artikelen: ["L", "M_lk", "M_nws", "M_nws"], preview: "S410G.jpg" },
  { naam: "S410G variant 1", artikelen: ["L", "M_lk", "M_nws", "M_lk"], preview: "S410G.jpg" },
  { naam: "S410H", artikelen: ["L", "M_lk", "M_nws", "M_nws"], preview: "S410H.jpg" },
  { naam: "S410H variant 1", artikelen: ["L", "M_lk", "M_nws", "M_lk"], preview: "S410H.jpg" },
  { naam: "S411H", artikelen: ["L", "L", "M_nws", "S_nws"], preview: "S411H.jpg" },
  { naam: "S411H variant 1", artikelen: ["L", "L", "M_lk", "S_nws"], preview: "S411H.jpg" },
  { naam: "S412K", artikelen: ["L", "L", "S_nws", "S_nws"], preview: "S412K.jpg" },
  { naam: "S413K", artikelen: ["L", "M_lk", "M_nws", "S_nws"], preview: "S413K.jpg" },
  { naam: "S414A", artikelen: ["L", "L", "M_nws", "S_nws"], preview: "S414A.jpg" },
  { naam: "S414A variant 1", artikelen: ["L", "L", "M_lk", "S_nws"], preview: "S414A.jpg" },
  { naam: "S414B", artikelen: ["L", "L", "M_nws", "S_nws"], preview: "S414B.jpg" },
  { naam: "S414B variant 1", artikelen: ["L", "L", "M_lk", "S_nws"], preview: "S414B.jpg" },
  { naam: "S414C", artikelen: ["L", "L", "M_nws", "S_nws"], preview: "S414C.jpg" },
  { naam: "S414C variant 1", artikelen: ["L", "L", "M_lk", "S_nws"], preview: "S414C.jpg" },
  { naam: "S414D", artikelen: ["L", "L", "M_nws", "S_nws"], preview: "S414D.jpg" },
  { naam: "S414D variant 1", artikelen: ["L", "L", "M_lk", "S_nws"], preview: "S414D.jpg" },
  { naam: "S415E", artikelen: ["L", "L", "M_nws", "S_nws"], preview: "S415E.jpg" },
  { naam: "S415E variant 1", artikelen: ["L", "L", "M_lk", "S_nws"], preview: "S415E.jpg" },
  { naam: "S415G", artikelen: ["L", "L", "M_nws", "S_nws"], preview: "S415G.jpg" },
  { naam: "S415G variant 1", artikelen: ["L", "L", "M_lk", "S_nws"], preview: "S415G.jpg" },
  { naam: "S415H", artikelen: ["L", "L", "M_nws", "S_nws"], preview: "S415H.jpg" },
  { naam: "S415H variant 1", artikelen: ["L", "L", "M_lk", "S_nws"], preview: "S415H.jpg" },
  { naam: "S416K", artikelen: ["L", "L", "S_nws", "S_nws"], preview: "S416K.jpg" },
  { naam: "S417M", artikelen: ["L", "L", "M_nws", "M_nws"], preview: "S417M.jpg" },
  { naam: "S417M variant 1", artikelen: ["L", "L", "M_lk", "M_nws"], preview: "S417M.jpg" },
  { naam: "S417M variant 2", artikelen: ["L", "L", "M_nws", "M_lk"], preview: "S417M.jpg" },
  { naam: "S417M variant 3", artikelen: ["L", "L", "M_lk", "M_lk"], preview: "S417M.jpg" },
  { naam: "S418M", artikelen: ["L", "L", "M_nws", "S_nws"], preview: "S418M.jpg" },
  { naam: "S418M variant 1", artikelen: ["L", "L", "M_lk", "S_nws"], preview: "S418M.jpg" },
  { naam: "S419M", artikelen: ["L", "M_lk", "M_nws", "M_nws"], preview: "S419M.jpg" },
  { naam: "S419M variant 1", artikelen: ["L", "M_lk", "M_nws", "M_lk"], preview: "S419M.jpg" },
  { naam: "S420J", artikelen: ["L", "L", "M_nws", "XS"], preview: "S420J.jpg" },
  { naam: "S420J variant 1", artikelen: ["L", "L", "M_lk", "XS"], preview: "S420J.jpg" },
  { naam: "S420N", artikelen: ["L", "L", "M_nws", "XS"], preview: "S420N.jpg" },
  { naam: "S420N variant 1", artikelen: ["L", "L", "M_lk", "XS"], preview: "S420N.jpg" },
  { naam: "S421J", artikelen: ["L", "L", "S_nws", "XS"], preview: "S421J.jpg" },
  { naam: "S421J variant 1", artikelen: ["L", "L", "S_lk", "XS"], preview: "S421J.jpg" },
  { naam: "S422L", artikelen: ["L", "M_lk", "M_nws", "XS"], preview: "S422L.jpg" },
  { naam: "S422L variant 1", artikelen: ["L", "M_lk", "M_lk", "XS"], preview: "S422L.jpg" },
  { naam: "S423L", artikelen: ["L", "L", "S_nws", "XS"], preview: "S423L.jpg" },
  { naam: "S423L variant 1", artikelen: ["L", "L", "S_lk", "XS"], preview: "S423L.jpg" },
  { naam: "S424N", artikelen: ["L", "M_nws", "S_nws", "XS"], preview: "S424N.jpg" },
  { naam: "S424N variant 1", artikelen: ["L", "M_nws", "S_lk", "XS"], preview: "S424N.jpg" },
  { naam: "S425A", artikelen: ["L", "L", "M_nws", "XS"], preview: "S425A.jpg" },
  { naam: "S425A variant 1", artikelen: ["L", "L", "M_lk", "XS"], preview: "S425A.jpg" },
  { naam: "S426A", artikelen: ["XL", "L", "M_nws", "XS"], preview: "S426A.jpg" },
  { naam: "S426A variant 1", artikelen: ["XL", "L", "M_lk", "XS"], preview: "S426A.jpg" },
  { naam: "S427A", artikelen: ["XL", "L", "XS", "XS"], preview: "S427A.jpg" },
  { naam: "S428A", artikelen: ["L", "L", "XS", "XS"], preview: "S428A.jpg" },
  { naam: "S429A", artikelen: ["XL", "M_nws", "XS", "S_nws"], preview: "S429A.jpg" },
  { naam: "S429A variant 1", artikelen: ["XL", "M_lk", "XS", "S_nws"], preview: "S429A.jpg" },
  { naam: "S429B", artikelen: ["XL", "M_nws", "XS", "S_nws"], preview: "S429B.jpg" },
  { naam: "S429B variant 1", artikelen: ["XL", "M_lk", "XS", "S_nws"], preview: "S429B.jpg" },
  { naam: "S429C", artikelen: ["XL", "M_nws", "XS", "S_nws"], preview: "S429C.jpg" },
  { naam: "S429C variant 1", artikelen: ["XL", "M_lk", "XS", "S_nws"], preview: "S429C.jpg" },
  { naam: "S429D", artikelen: ["XL", "M_nws", "XS", "S_nws"], preview: "S429D.jpg" },
  { naam: "S429D variant 1", artikelen: ["XL", "M_lk", "XS", "S_nws"], preview: "S429D.jpg" },
  { naam: "S430A", artikelen: ["XXL", "M_nws", "XS", "S_nws"], preview: "S430A.jpg" },
  { naam: "S430A variant 1", artikelen: ["XXL", "M_lk", "XS", "S_nws"], preview: "S430A.jpg" },
  { naam: "S430B", artikelen: ["XXL", "M_nws", "XS", "S_nws"], preview: "S430B.jpg" },
  { naam: "S430B variant 1", artikelen: ["XXL", "M_lk", "XS", "S_nws"], preview: "S430B.jpg" },
  { naam: "S430C", artikelen: ["XXL", "M_nws", "XS", "S_nws"], preview: "S430C.jpg" },
  { naam: "S430C variant 1", artikelen: ["XXL", "M_lk", "XS", "S_nws"], preview: "S430C.jpg" },
  { naam: "S430D", artikelen: ["XXL", "M_nws", "XS", "S_nws"], preview: "S430D.jpg" },
  { naam: "S430D variant 1", artikelen: ["XXL", "M_lk", "XS", "S_nws"], preview: "S430D.jpg" },
  { naam: "S431A", artikelen: ["L", "L", "S_nws", "S_nws"], preview: "S431A.jpg" },
  { naam: "S432A", artikelen: ["XXL", "L", "XS", "XS"], preview: "S432A.jpg" },
  { naam: "S501A", artikelen: ["L", "M_nws", "S_lk", "S_nws", "XS"], preview: "S501A.jpg" },
  { naam: "S501A variant 1", artikelen: ["L", "M_lk", "S_lk", "S_nws", "XS"], preview: "S501A.jpg" },
  { naam: "S502A", artikelen: ["L", "L", "S_nws", "XS", "XS"], preview: "S502A.jpg" },
  { naam: "S503A", artikelen: ["L", "M_lk", "M_nws", "XS", "XS"], preview: "S503A.jpg" },
  { naam: "S504A", artikelen: ["L", "M_lk", "M_nws", "S_nws", "XS"], preview: "S504A.jpg" },
  { naam: "S504A variant 1", artikelen: ["L", "M_lk", "M_nws", "S_lk", "XS"], preview: "S504A.jpg" },
  { naam: "S505A", artikelen: ["L", "M_lk", "M_nws", "S_nws", "XS"], preview: "S505A.jpg" },
  { naam: "S505A variant 1", artikelen: ["L", "M_lk", "M_lk", "S_nws", "XS"], preview: "S505A.jpg" },
  { naam: "S506A", artikelen: ["L", "M_nws", "S_nws", "S_nws", "S_nws"], preview: "S506A.jpg" },
  { naam: "S506A variant 1", artikelen: ["L", "M_nws", "S_lk", "S_nws", "S_nws"], preview: "S506A.jpg" },
  { naam: "S506A variant 2", artikelen: ["L", "M_nws", "S_nws", "S_lk", "S_nws"], preview: "S506A.jpg" },
  { naam: "S506A variant 3", artikelen: ["L", "M_nws", "S_lk", "S_lk", "S_nws"], preview: "S506A.jpg" },
  { naam: "S506A variant 4", artikelen: ["L", "M_lk", "S_nws", "S_nws", "S_nws"], preview: "S506A.jpg" },
  { naam: "S506A variant 5", artikelen: ["L", "M_lk", "S_lk", "S_nws", "S_nws"], preview: "S506A.jpg" },
  { naam: "S506A variant 6", artikelen: ["L", "M_lk", "S_nws", "S_lk", "S_nws"], preview: "S506A.jpg" },
  { naam: "S506A variant 7", artikelen: ["L", "M_lk", "S_lk", "S_lk", "S_nws"], preview: "S506A.jpg" },
  { naam: "S506I", artikelen: ["L", "M_nws", "S_nws", "S_nws", "S_nws"], preview: "S506I.jpg" },
  { naam: "S506I variant 1", artikelen: ["L", "M_nws", "S_lk", "S_nws", "S_nws"], preview: "S506I.jpg" },
  { naam: "S506I variant 2", artikelen: ["L", "M_nws", "S_nws", "S_lk", "S_nws"], preview: "S506I.jpg" },
  { naam: "S506I variant 3", artikelen: ["L", "M_nws", "S_lk", "S_lk", "S_nws"], preview: "S506I.jpg" },
  { naam: "S506I variant 4", artikelen: ["L", "M_lk", "S_nws", "S_nws", "S_nws"], preview: "S506I.jpg" },
  { naam: "S506I variant 5", artikelen: ["L", "M_lk", "S_lk", "S_nws", "S_nws"], preview: "S506I.jpg" },
  { naam: "S506I variant 6", artikelen: ["L", "M_lk", "S_nws", "S_lk", "S_nws"], preview: "S506I.jpg" },
  { naam: "S506I variant 7", artikelen: ["L", "M_lk", "S_lk", "S_lk", "S_nws"], preview: "S506I.jpg" },
  { naam: "S507E", artikelen: ["L", "M_nws", "S_nws", "S_nws", "S_nws"], preview: "S507E.jpg" },
  { naam: "S507E variant 1", artikelen: ["L", "M_nws", "S_nws", "S_lk", "S_nws"], preview: "S507E.jpg" },
  { naam: "S507E variant 2", artikelen: ["L", "M_nws", "S_lk", "S_nws", "S_nws"], preview: "S507E.jpg" },
  { naam: "S507E variant 3", artikelen: ["L", "M_nws", "S_lk", "S_lk", "S_nws"], preview: "S507E.jpg" },
  { naam: "S507E variant 4", artikelen: ["L", "M_lk", "S_nws", "S_nws", "S_nws"], preview: "S507E.jpg" },
  { naam: "S507E variant 5", artikelen: ["L", "M_lk", "S_nws", "S_lk", "S_nws"], preview: "S507E.jpg" },
  { naam: "S507E variant 6", artikelen: ["L", "M_lk", "S_lk", "S_nws", "S_nws"], preview: "S507E.jpg" },
  { naam: "S507E variant 7", artikelen: ["L", "M_lk", "S_lk", "S_lk", "S_nws"], preview: "S507E.jpg" },
  { naam: "S507G", artikelen: ["L", "M_nws", "S_nws", "S_nws", "S_nws"], preview: "S507G.jpg" },
  { naam: "S507G variant 1", artikelen: ["L", "M_nws", "S_lk", "S_nws", "S_nws"], preview: "S507G.jpg" },
  { naam: "S507G variant 2", artikelen: ["L", "M_nws", "S_nws", "S_lk", "S_nws"], preview: "S507G.jpg" },
  { naam: "S507G variant 3", artikelen: ["L", "M_nws", "S_lk", "S_lk", "S_nws"], preview: "S507G.jpg" },
  { naam: "S507G variant 4", artikelen: ["L", "M_lk", "S_nws", "S_nws", "S_nws"], preview: "S507G.jpg" },
  { naam: "S507G variant 5", artikelen: ["L", "M_lk", "S_lk", "S_nws", "S_nws"], preview: "S507G.jpg" },
  { naam: "S507G variant 6", artikelen: ["L", "M_lk", "S_nws", "S_lk", "S_nws"], preview: "S507G.jpg" },
  { naam: "S507G variant 7", artikelen: ["L", "M_lk", "S_lk", "S_lk", "S_nws"], preview: "S507G.jpg" },
  { naam: "S507H", artikelen: ["L", "M_nws", "S_nws", "S_nws", "S_nws"], preview: "S507H.jpg" },
  { naam: "S507H variant 1", artikelen: ["L", "M_nws", "S_lk", "S_nws", "S_nws"], preview: "S507H.jpg" },
  { naam: "S507H variant 2", artikelen: ["L", "M_nws", "S_nws", "S_lk", "S_nws"], preview: "S507H.jpg" },
  { naam: "S507H variant 3", artikelen: ["L", "M_nws", "S_lk", "S_lk", "S_nws"], preview: "S507H.jpg" },
  { naam: "S507H variant 4", artikelen: ["L", "M_lk", "S_nws", "S_nws", "S_nws"], preview: "S507H.jpg" },
  { naam: "S507H variant 5", artikelen: ["L", "M_lk", "S_lk", "S_nws", "S_nws"], preview: "S507H.jpg" },
  { naam: "S507H variant 6", artikelen: ["L", "M_lk", "S_nws", "S_lk", "S_nws"], preview: "S507H.jpg" },
  { naam: "S507H variant 7", artikelen: ["L", "M_lk", "S_lk", "S_lk", "S_nws"], preview: "S507H.jpg" },
  { naam: "S508A", artikelen: ["L", "L", "M_nws", "S_nws", "XS"], preview: "S508A.jpg" },
  { naam: "S508A variant 1", artikelen: ["L", "L", "M_lk", "S_nws", "XS"], preview: "S508A.jpg" },
  { naam: "S509A", artikelen: ["L", "L", "S_nws", "S_nws", "XS"], preview: "S509A.jpg" },
  { naam: "S509A variant 1", artikelen: ["L", "L", "S_lk", "S_nws", "XS"], preview: "S509A.jpg" },
  { naam: "S510A", artikelen: ["L", "M_nws", "M_nws", "S_lk", "S_nws"], preview: "S510A.jpg" },
  { naam: "S510A variant 1", artikelen: ["L", "M_lk", "M_nws", "S_lk", "S_nws"], preview: "S510A.jpg" },
  { naam: "S510A variant 2", artikelen: ["L", "M_nws", "M_nws", "S_nws", "S_nws"], preview: "S510A.jpg" },
  { naam: "S510A variant 3", artikelen: ["L", "M_lk", "M_nws", "S_nws", "S_nws"], preview: "S510A.jpg" },
  { naam: "S511A", artikelen: ["L", "L", "M_nws", "XS", "XS"], preview: "S511A.jpg" },
  { naam: "S511A variant 1", artikelen: ["L", "L", "M_lk", "XS", "XS"], preview: "S511A.jpg" },
  { naam: "S511E", artikelen: ["L", "L", "M_nws", "XS", "XS"], preview: "S511E.jpg" },
  { naam: "S511E variant 1", artikelen: ["L", "L", "M_lk", "XS", "XS"], preview: "S511E.jpg" },
  { naam: "S511G", artikelen: ["L", "L", "M_nws", "XS", "XS"], preview: "S511G.jpg" },
  { naam: "S511G variant 1", artikelen: ["L", "L", "M_lk", "XS", "XS"], preview: "S511G.jpg" },
  { naam: "S511H", artikelen: ["L", "L", "M_nws", "XS", "XS"], preview: "S511H.jpg" },
  { naam: "S511H variant 1", artikelen: ["L", "L", "M_lk", "XS", "XS"], preview: "S511H.jpg" },
  { naam: "S512K", artikelen: ["L", "L", "S_nws", "XS", "XS"], preview: "S512K.jpg" },
  { naam: "S513K", artikelen: ["L", "S_nws", "S_nws", "S_nws", "S_nws"], preview: "S513K.jpg" },
  { naam: "S513K variant 1", artikelen: ["L", "S_nws", "S_lk", "S_nws", "S_nws"], preview: "S513K.jpg" },
  { naam: "S513K variant 2", artikelen: ["L", "S_lk", "S_nws", "S_nws", "S_nws"], preview: "S513K.jpg" },
  { naam: "S513K variant 3", artikelen: ["L", "S_lk", "S_lk", "S_nws", "S_nws"], preview: "S513K.jpg" },
  { naam: "S514K", artikelen: ["L", "L", "S_nws", "S_nws", "XS"], preview: "S514K.jpg" },
  { naam: "S514K variant 1", artikelen: ["L", "L", "S_lk", "S_nws", "XS"], preview: "S514K.jpg" },
  { naam: "S515I", artikelen: ["L", "L", "M_nws", "XS", "XS"], preview: "S515I.jpg" },
  { naam: "S515I variant 1", artikelen: ["L", "L", "M_lk", "XS", "XS"], preview: "S515I.jpg" },
  { naam: "S516M", artikelen: ["L", "M_lk", "M_nws", "XS", "S_nws"], preview: "S516M.jpg" },
  { naam: "S516M variant 1", artikelen: ["L", "M_lk", "M_lk", "XS", "S_nws"], preview: "S516M.jpg" },
  { naam: "S516M variant 2", artikelen: ["L", "M_nws", "M_nws", "XS", "S_nws"], preview: "S516M.jpg" },
  { naam: "S516M variant 3", artikelen: ["L", "M_nws", "M_lk", "XS", "S_nws"], preview: "S516M.jpg" },
  { naam: "S517M", artikelen: ["L", "M_nws", "S_nws", "S_lk", "S_nws"], preview: "S517M.jpg" },
  { naam: "S517M variant 1", artikelen: ["L", "M_nws", "S_lk", "S_nws", "S_nws"], preview: "S517M.jpg" },
  { naam: "S517M variant 2", artikelen: ["L", "M_nws", "S_lk", "S_lk", "S_nws"], preview: "S517M.jpg" },
  { naam: "S517M variant 3", artikelen: ["L", "M_nws", "S_nws", "S_nws", "S_nws"], preview: "S517M.jpg" },
  { naam: "S517M variant 4", artikelen: ["L", "M_lk", "S_nws", "S_nws", "S_nws"], preview: "S517M.jpg" },
  { naam: "S517M variant 5", artikelen: ["L", "M_lk", "S_lk", "S_nws", "S_nws"], preview: "S517M.jpg" },
  { naam: "S517M variant 6", artikelen: ["L", "M_lk", "S_lk", "S_lk", "S_nws"], preview: "S517M.jpg" },
   { naam: "S517M variant 7", artikelen: ["L", "M_lk", "S_nws", "S_lk", "S_nws"], preview: "S517M.jpg" },
];

const formaten = ["XS", "S_nws", "S_lk", "M_nws", "M_lk", "L", "XL", "XXL"];
const formaatVolgorde = { XS: 1, S_nws: 2, S_lk: 3, M_nws: 4, M_lk: 5, L: 6, XL: 7, XXL: 8 };
const advertentieLetterMap = {
  W41: 'B',
  W39: 'C',
  W37: 'D',
  W36: 'E',
  W35: 'F',
  W32: 'G',
  W29: 'H',
  W23: 'I',
  W21: 'J',
  W17: 'K',
  W16: 'L',
  W13: 'M',
  W4:  'N',
};
// Nieuwe tussenlaag voor combinatie van advertentie 1 + 2
const combinatieMap = {
  'W17|W13': ['N'], 'W13|W17': ['N'],
  'W17|W23': ['N'], 'W23|W17': ['N'],
  'W23|W32': ['L','M'], 'W32|W23': ['L','M'],
  'W29|W23': ['L'], 'W23|W29': ['L'],
  'W29|W29': ['K'],
  'W29|W32': ['K'], 'W32|W29': ['K'],
  'W32|W32': ['J'],
  'W29|W35': ['I'], 'W35|W29': ['I'],
  'W29|W37': ['I'], 'W37|W29': ['I'],
  'W29|W39': ['I'], 'W39|W29': ['I'],
  'W35|W35': ['H'],
  'W35|W37': ['H'], 'W37|W35': ['H'],
  'W35|W39': ['H'], 'W39|W35': ['H'],
  'W37|W37': ['G'],
  'W37|W39': ['G'], 'W39|W37': ['G'],
  'W37|W41': ['G'], 'W41|W37': ['G'],
  'W39|W39': ['E','F'],
  'W39|W41': ['E'], 'W41|W39': ['E'],
};

const TooltipImage = ({ src = "/advertentiematen.jpg", alt = "Advertentiematen" }) => (
  <span className="relative group inline-flex items-center ml-2 cursor-help select-none" aria-label="Toon voorbeeld">
    <span className="text-base align-middle">ℹ️</span>
    <span className="absolute left-0 top-full mt-2 hidden group-hover:block z-[9999]">
      <span className="block rounded-lg border border-[#002f6c] bg-white shadow-2xl p-2">
        <img
          src={src}
          alt={alt}
          className="rounded max-w-none w-auto h-auto"
          style={{ display: 'block' }}
        />
      </span>
    </span>
  </span>
);

const WrenchTooltip = () => (
  <span className="relative group inline-flex items-center ml-2 cursor-help select-none" aria-label="Reshape info">
    <span className="text-lg align-middle">🔧</span>
    <span className="absolute left-0 top-full mt-2 hidden group-hover:block z-[9999] w-64">
      <span className="block rounded-lg border border-[#002f6c] bg-white shadow-2xl p-2 text-sm font-normal text-[#002f6c]">
        Een of meerdere vormen op de template moeten een handmatige reshape krijgen, van nieuws naar lichte kop of omgekeerd.
      </span>
    </span>
  </span>
);

// Weergavelaag voor artikelcodes (S_nws, M_lk, etc.)
// - Eerste letter in **bold**
// - Toevoeging (nws/lk) in lichtgewicht en zonder underscore
const renderFormaat = (formaat) => {
  if (!formaat || typeof formaat !== 'string') return null;
  if (!formaat.includes('_')) return <span className="font-bold">{formaat}</span>;
  const [letter, suffix] = formaat.split('_');
  const suffixLabel = suffix === 'nws' ? 'nieuws' : (suffix === 'lk' ? 'lichte kop' : suffix);
  return (
    <span>
      <span className="font-bold">{letter}</span>{' '}<span className="font-light">{suffixLabel}</span>
    </span>
  );
};

function TemplateMatcher() {
  const [geselecteerd, setGeselecteerd] = useState({});
  const [aantalAdvertenties, setAantalAdvertenties] = useState(0);
  const [advertenties, setAdvertenties] = useState([]);
  const [paginaformaat, setPaginaformaat] = useState('both');

  const updateAantal = (formaat, aantal) => {
    setGeselecteerd((prev) => ({ ...prev, [formaat]: parseInt(aantal) || 0 }));
  };

  const updateAdvertentie = (index, veld, waarde) => {
    setAdvertenties((prev) => {
      const nieuw = [...prev];
      if (!nieuw[index]) nieuw[index] = {};
      nieuw[index][veld] = waarde;
      return nieuw;
    });
  };

  const matchesTemplate = (template) => {
    const kopie = [...template.artikelen];
    for (let formaat in geselecteerd) {
      let nodig = geselecteerd[formaat];
      while (nodig > 0) {
        const index = kopie.indexOf(formaat);
        if (index === -1) return false;
        kopie.splice(index, 1);
        nodig--;
      }
    }
    return true;
  };

  const visualiseerBlokjes = (template) => {
    const teller = {};
    for (let formaat of template.artikelen) {
      teller[formaat] = (teller[formaat] || 0) + 1;
    }
    const kopie = { ...geselecteerd };
    for (let formaat in kopie) {
      teller[formaat] = (teller[formaat] || 0) - kopie[formaat];
    }

    const blokjeObjecten = template.artikelen.map((formaat) => {
      const isIngevuld = (kopie[formaat] || 0) > 0;
      if (isIngevuld) kopie[formaat]--;
      return {
        formaat,
        kleur: isIngevuld ? "bg-green-500" : "bg-[#002f6c]"
      };
    });

    blokjeObjecten.sort((a, b) => formaatVolgorde[a.formaat] - formaatVolgorde[b.formaat]);

    return (
      <div className="mt-2 flex flex-wrap">
        {blokjeObjecten.map((blok, i) => (
          <span key={i} className={`inline-block px-2 py-1 m-0.5 ${blok.kleur} text-white rounded text-sm font-bold`}>
            {renderFormaat(blok.formaat)}
          </span>
        ))}
      </div>
    );
  };

  const mogelijkeTemplates = templates.filter((template) => {
  // Eerste schifting o.b.v. Aantal advertenties
  const code = (template.naam || '').slice(0, 5);
  const eindletter = code[4];

  if (aantalAdvertenties === 0) {
    // Alleen templates met eindletter A
    if (eindletter !== 'A') return false;
  } else if (aantalAdvertenties === 1 || aantalAdvertenties === 2) {
    // Templates met eindletter A uitsluiten
    if (eindletter === 'A') return false;
  }

  // Paginaformaat-filter
  if (paginaformaat === 'single' && !(template.naam || '').startsWith('E')) return false;
  if (paginaformaat === 'spread' && !(template.naam || '').startsWith('S')) return false;

  // Combinatieregel als er precies 2 advertenties zijn
  if (aantalAdvertenties === 2 && advertenties[0]?.formaat && advertenties[1]?.formaat) {
    const key = `${advertenties[0].formaat}|${advertenties[1].formaat}`;
    const toegestaneEindletters =
      combinatieMap[key] || combinatieMap[`${advertenties[1].formaat}|${advertenties[0].formaat}`];
    
    // Als er geen geldige combinatie bestaat, blokkeer alle templates
    if (!toegestaneEindletters || toegestaneEindletters.length === 0) {
      return false;
    }
    
    // Als er wel een geldige combinatie bestaat, check of deze template de juiste eindletter heeft
    if (!toegestaneEindletters.includes(eindletter)) {
      return false;
    }
  } else if (aantalAdvertenties === 1 && advertenties[0]?.formaat) {
    // Regel voor 1 advertentie
    const gewensteLetter = advertentieLetterMap[advertenties[0].formaat];
    if (gewensteLetter && eindletter !== gewensteLetter) return false;
  }

  if (aantalAdvertenties === 3) return false;

  return matchesTemplate(template);
});
  
  return (
    <div className="p-6 space-y-6 text-[#002f6c] min-h-screen" style={{ backgroundImage: 'linear-gradient(to bottom right, #b3cce6, #e6edf5)' }}>
      <div className="flex items-center">
        <img src="https://focus.limburger.nl/raw/prod-mh-design-system/7.14.1/dl/logos/logo-main.svg" alt="De Limburger logo" className="h-12 mr-4" />
        <h1 className="text-3xl font-extrabold tracking-tight">Template Matchmaker</h1>
        <span className="text-sm font-normal align-top ml-2 bg-white/40 px-2 py-0.5 rounded">V1.0</span>
      </div>

      <div className="bg-white/40 rounded-xl p-4">
        <h2 className="text-lg font-bold mb-4 flex items-center">📐 Paginaformaat</h2>
        <div className="mb-2">
          <label className="text-sm font-semibold mb-1 block">Kies het formaat van de pagina die je wil plannen</label>
          <select
            className="border border-[#002f6c] rounded p-2 w-full max-w-md"
            value={paginaformaat}
            onChange={(e) => setPaginaformaat(e.target.value)}
          >
            <option value="both">Geen keuze</option>
            <option value="single">Enkele pagina</option>
            <option value="spread">Spreadpagina</option>
          </select>
        </div>
      </div>

     <div className="bg-white/40 rounded-xl p-4">
        <h2 className="text-lg font-bold mb-4 flex items-center">📰 Artikelen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-3xl">
          {formaten.map((formaat) => (
            <div key={formaat} className="flex flex-col">
              <label htmlFor={formaat} className="text-sm font-semibold mb-1">
                {renderFormaat(formaat)} <span className='font-normal'>({formaat === "XS" ? 1000 : formaat === "S_nws" ? 1800 : formaat === "S_lk" ? 1800 : formaat === "M_nws" ? 2800 : formaat === "M_lk" ? 2800 : formaat === "L" ? 4000 : formaat === "XL" ? 5400 : 7200} tekens)</span>
              </label>
              <Input
                id={formaat}
                type="number"
                min="0"
                className="border border-[#002f6c] px-3 py-2 rounded-md w-full"
                value={geselecteerd[formaat] || ""}
                onChange={(e) => updateAantal(formaat, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/40 rounded-xl p-4">
        <h2 className="text-lg font-bold mb-4 flex items-center">📢 Advertenties <TooltipImage src="/advertentiematen.jpg" alt="Advertentiematen" /></h2>
        <div className="mb-6">
          <label className="text-sm font-semibold mb-1 block">Aantal advertenties</label>
          <select
            className="border border-[#002f6c] rounded p-2"
            value={aantalAdvertenties}
            onChange={(e) => {
              const aantal = Number(e.target.value);
              setAantalAdvertenties(aantal);
              setAdvertenties([...Array(aantal)].map(() => ({ formaat: "" })));
            }}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          {aantalAdvertenties <= 2 && [...Array(aantalAdvertenties)].map((_, index) => (
<div key={index} className="flex flex-wrap gap-1 mt-2 items-end">
  <div className="flex flex-col mr-1">
    <label className="text-sm font-semibold mb-1 block">Advertentie {index + 1}: formaat</label>
    <select
      className="border border-[#002f6c] w-56 p-1 rounded"
      value={advertenties[index]?.formaat || ''}
      onChange={(e) => updateAdvertentie(index, 'formaat', e.target.value)}
    >
      <option value="">Selecteer</option>
      <option value="W41">W41 (50x30 mm)</option>
      <option value="W39">W39 (50x46 mm)</option>
      <option value="W37">W37 (50x70 mm)</option>
      <option value="W36">W36 (104x46 mm)</option>
      <option value="W35">W35 (50x94 mm)</option>
      <option value="W32">W32 (104x70 mm)</option>
      <option value="W29">W29 (104x94 mm)</option>
      <option value="W23">W23 (158x94 mm)</option>
      <option value="W21">W21 (266x70 mm)</option>
      <option value="W17">W17 (104x190 mm)</option>
      <option value="W16">W16 (266x94 mm)</option>
      <option value="W13">W13 (158x166 mm)</option>
      <option value="W4">W4 (266x190 mm)</option>
    </select>
  </div>
</div>
          ))}

          {aantalAdvertenties === 3 && (
            <p className="mt-4 text-sm text-[#002f6c] bg-white/50 p-2 rounded">
              Geen templates beschikbaar met drie of meer advertenties. Pagina moet handmatig door vormgever worden opgebouwd.
            </p>
          )}
        </div>
      </div>

      <h2 className="text-xl font-bold mt-8">Mogelijke templates:</h2>
      {mogelijkeTemplates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mogelijkeTemplates.map((template) => (
            <Card key={template.naam} className="border border-[#002f6c]">
              <CardContent className="p-4">
                <p className="font-bold text-2xl text-[#002f6c] flex items-center">
                  {(template.naam || '').slice(0,5)}
                  {(template.naam || '').toLowerCase().includes('variant') && <WrenchTooltip />}
                </p>
                {visualiseerBlokjes(template)}
                {template.preview && (
                  <img
                    src={template.preview}
                    alt={`Voorvertoning van ${template.naam}`}
                    className="mt-2 rounded border border-[#002f6c]"
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-[#002f6c]">Geen templates gevonden die aan de criteria voldoen.</p>
      )}
    </div>
  );
}

export default TemplateMatcher;
