<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'exmachinefmci' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'exmachinefmci' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'carp310M' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'exmachinefmci.mysql.db' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '+@nt=1=aB1tVo:<vh4^e 0wbEzU{/gGcp(>|,z#6AHJw&GB}<;gh$5>pO{3kBEy@' );
define( 'SECURE_AUTH_KEY',  '+.v,piI~fZBTC3/.Ii=*n(FVFO$MxJh?vq<~_,pXX#![jnG=SSb+NbkmC+83acw=' );
define( 'LOGGED_IN_KEY',    '4ViU~nC@*Wp$$Y`/T^8wT3PHH1Ryuev>;_a;/8 EP(;};vxKk{k4Axq0E:cPN),r' );
define( 'NONCE_KEY',        'lHS3RC^Z{Ns]`!zQJ?wLoGp[1b~Csj]Z6+J^Q?h5{Fv=Hyq)#+Q!JPSN$3 t[2=)' );
define( 'AUTH_SALT',        '4+D(mIr*@-PneHFbkC9WA}~d4`E#:_x76KZzG|SwUN|1J &#<E+LSiDWM{X5R|Y{' );
define( 'SECURE_AUTH_SALT', 'r:C>SV.}j0-/8geFXV7Z%.Jt%*t)FuO_fZTeOa/AYvu;C,!HwK25&ALLi(/)A@5$' );
define( 'LOGGED_IN_SALT',   't)Kc`u_RF]$r/mo`Z:a@R0i;h z[KaXCTsm_:YI0nZ2+(c1e$dz-m^^v1eo_lDQ6' );
define( 'NONCE_SALT',       '{+A[b,rmvxl&0@>8B?],tvE@.ohF7zSRoh+3V&1LsxH$>xl)j<4c3T^N(53H[^TZ' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
