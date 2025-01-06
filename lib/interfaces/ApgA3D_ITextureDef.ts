/** ---------------------------------------------------------------------------
 * @module [BrdGlb]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdGlb server side
 * @version 0.4 APG 20240225 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Definizione dei dati di mappatura delle TEXTURE.
 */
export interface ApgA3D_ITextureDef {

  /**
   * Identificatore della texture come elencato nei CDN Assets {@link BrdBlm_ICDNAsset}
   */
  CDNAssetId: string;

  /**
   * Scala di mappatura orizzontale
   */
  uScale: number;

  /**
   * Scala di mappatura verticale
   */
  vScale: number;

  /**
   * Rotazione in gradi sessaggesimali: valori positivi generano una rotazione antioraria
   */
  rotationInDeg?: number;

}


