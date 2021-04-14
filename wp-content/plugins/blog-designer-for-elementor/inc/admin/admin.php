<?php
add_action( 'admin_menu', 'bdfe_welcome_page_menu' );


function bdfe_welcome_page_menu(){
	add_menu_page( 
		__('Blog Designer', 'bdfe')
		, __('Blog Designer'),
		'manage_options',
		'theimran-blog-designer',
		'bdfe_welcome_page',
		'',
		7
	);

}

function bdfe_welcome_page(){
	?>
	<div class="section-blog-designer">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<div class="blog-desinger-single-item">
						<h2><?php esc_html_e( 'This video shows you how you can create a blog page using Blog Designer and Elmentor Page builder plugin.', 'bdfe' );?></h2>
						<iframe width="600" height="320" src="https://www.youtube.com/embed/gAZFDGNJTeQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<h2><?php esc_html_e('Some Premium WordPress Themes which is very much compatible with the Blog Designer Plugin.', 'bdfe'); ?></h2>
				</div>
				<div class="col-md-4">
					<div class="blog-desinger-single-item">
						<div class="theimran-blog-theme">
							<img src="<?php echo esc_url(BDFE_PLUGIN_URL . 'assets/admin/img/craftyblog-pro.jpg');?>" alt="<?php echo esc_attr_e('Craftyblog Pro', 'bdfe');?>">
							<a href="<?php echo esc_url('https://theimran.com/themes/wordpress-theme/crafty-blog-pro-simply-beautiful-wordpress-theme/');?>" target="_blank" class="view-details"><?php esc_html_e('View Details', 'bdfe'); ?></a>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="blog-desinger-single-item">
						<div class="theimran-blog-theme">
							<img src="<?php echo esc_url(BDFE_PLUGIN_URL . 'assets/admin/img/minimalblog.jpg');?>" alt="<?php echo esc_attr_e('Minimal Blog', 'bdfe');?>">
							<a href="<?php echo esc_url('https://theimran.com/themes/wordpress-theme/best-personal-blog-wordpress-theme/');?>" target="_blank" class="view-details"><?php esc_html_e('View Details', 'bdfe'); ?></a>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="blog-desinger-single-item">
						<div class="theimran-blog-theme">
							<img src="<?php echo esc_url(BDFE_PLUGIN_URL . 'assets/admin/img/blog-starter.png');?>" alt="<?php echo esc_attr_e('blog starter', 'bdfe');?>">
							<a href="<?php echo esc_url('https://theimran.com/themes/wordpress-theme/blog-starter-pro-personal-blog-wordpress-theme/');?>" target="_blank" class="view-details"><?php esc_html_e('View Details', 'bdfe'); ?></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<?php
}




add_action( 'admin_enqueue_scripts', 'bdfe_admin_welcome_page_scripts', 10, 1 );

function bdfe_admin_welcome_page_scripts(){
	if (admin_url('theimran-blog-designer')) {
		wp_enqueue_style( 'bdfe_welcome_page', BDFE_PLUGIN_URL . 'assets/admin/admin.css' );
	}
}

