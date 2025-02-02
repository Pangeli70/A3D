/** ---------------------------------------------------------------------------
 * @module [ApgA3D]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Moved in its own file
 * @version 0.3 APG 20231227 Modul Glb server side
 * @version 0.4 APG 20240225 Modul Blm server side
 * @version 0.5 APG 20241209 Moved to A3D module
 * ----------------------------------------------------------------------------
 */

/**
 * Definition of an basic texture
 */
export interface ApgA3D_ITextureDef {

  /**
   * Identificatore della texture come elencato nei CDN Assets {@link ApgA3D_ICDNAsset}
   */
  CDNAssetId: string;

  /**
   * Horizontal scale
   */
  uScale: number;

  /**
   * Vertical scale
   */
  vScale: number;

  /**
   * Rotation in degrees: positive values generate an anti-clockwise rotation
   */
  rotationInDeg?: number;

}


