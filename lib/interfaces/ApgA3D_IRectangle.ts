/** ---------------------------------------------------------------------------
 * @module [ApgA3D]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Rettangolo per la gestione delle estrusioni di ingombri
 * nel visualizzatore 3D.
 * Viene usato sia per travi che per colonne.
 */
export interface ApgA3D_IRectangle {
  x: number;
  y: number;
  w: number;
  h: number;
}


