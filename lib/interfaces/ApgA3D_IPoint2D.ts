/** ---------------------------------------------------------------------------
 * @module [BrdApgA3DBlm]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Punto bidimensionale con coordinate x, y per la gestione delle estrusioni
 * nel visualizzatore 3D.
 * Viene usato sia per i profili che per i percorsi.
 */
export interface ApgA3D_IPoint2D {
  x: number;
  y: number;
}
