<?php
header("Content-type: text/css; charset: UTF-8");
$style = '';

// HEADER LOGO
if ( cs_get_option('site_logo') == 'txtlogo' ) {
    //Header logo text
    if ( cs_get_option('text_logo_style') == 'custom' ) {
        $style .= '.prague-logo a {';
        $style .=  cs_get_option('text_logo_color') && cs_get_option('text_logo_color') !== '#fff' ? 'color:' . cs_get_option('text_logo_color') . ' !important;' : '';
        $style .=  cs_get_option('text_logo_width') ? 'width:' . cs_get_option('text_logo_width') . ' !important;' : '';
        $style .=  cs_get_option('text_logo_font_size') ? 'font-size:' . cs_get_option('text_logo_font_size') . ' !important;' : '';
        $style .= '}';
    }
} else {
    //Header logo image
    if ( cs_get_option('img_logo_style') == 'custom' ) {
        $style .= '.prague-logo a img {';
        if (cs_get_option('img_logo_width')) {
             $logo_width = is_integer(cs_get_option('img_logo_width')) ? cs_get_option('img_logo_width') . 'px' : cs_get_option('img_logo_width');
             $style .=  cs_get_option('img_logo_width') ? 'width:' . esc_attr($logo_width) . ' !important;' : '';
        }
        if (cs_get_option('img_logo_height')) {
             $logo_height = is_integer(cs_get_option('img_logo_height')) ? cs_get_option('img_logo_height') . 'px' : cs_get_option('img_logo_height');
             $style .=  cs_get_option('img_logo_height') ? 'height:' . esc_attr( $logo_height ) . ' !important;' : '';
        }
        $style .= '}';
    }
}
echo $style;

// TYPOGRAPHY
//$options = apply_filters( 'cs_get_option', get_option( CS_OPTION ) );

//function get_str_by_number($str){
//    $number = preg_replace("/[0-9|\.]/", '', $str);
//    return $number;
//}
function get_number_str($str){
    $number = preg_replace("/[^0-9|\.]/", '', $str);
    return $number;
}
//foreach ($options as $key => $item) {
//    if (is_array($item)) {
//        if (!empty($item['variant']) && $item['variant'] == 'regular') {
//            $item['variant'] = 'normal';
//        }
//    }
//    $options[$key] = $item;
//}

function calculateFontWeight( $fontWeight ) {
        $fontWeightValue = '';
        $fontStyleValue = '';

        switch( $fontWeight ) {
            case '100':
                $fontWeightValue = '100';
                break;
            case '100italic':
                $fontWeightValue = '100';
                $fontStyleValue = 'italic';
                break;
            case '300':
                $fontWeightValue = '300';
                break;
            case '300italic':
                $fontWeightValue = '300';
                $fontStyleValue = 'italic';
                break;
            case '500':
                $fontWeightValue = '500';
                break;
            case '500italic':
                $fontWeightValue = '500';
                $fontStyleValue = 'italic';
                break;
            case '700':
                $fontWeightValue = '700';
                break;
            case '700italic':
                $fontWeightValue = '700';
                $fontStyleValue = 'italic';
                break;
            case '900':
                $fontWeightValue = '900';
                break;
            case '900italic':
                $fontWeightValue = '900';
                $fontStyleValue = 'italic';
                break;
            case 'italic':
                $fontStyleValue = 'italic';
                break;
        }
        return array('weight' => $fontWeightValue, 'style' => $fontStyleValue);
    }

// FOR TITLE H1 - H6
if ( cs_get_option('heading') ) {
    foreach (cs_get_option('heading') as $title) {
        $font_family = $title['heading_family']; ?>
        <?php echo $title['heading_tag']; ?>,
        <?php echo $title['heading_tag']; ?> a {
            <?php echo $font_family['family'] ? "font-family: {$font_family['family']} !important;" : '';
            $variant = calculateFontWeight( $font_family['variant'] );
            if(!empty($variant['style'])) : ?>
                font-style: <?php echo esc_html( $variant['style']); ?> !important;
            <?php endif;
            if(!empty($variant['weight'])) : ?>
                font-weight: <?php echo esc_html( $variant['weight']); ?> !important;
            <?php endif;
            $one_title_size = get_number_str($title['heading_size']);
            echo $one_title_size ? "font-size: {$one_title_size}px !important;\n line-height: normal;" : '';
            echo $title['heading_color'] ? "color: {$title['heading_color']} !important;" : ''; ?>
        }
    <?php }
} ?>

/* MENU */
<?php $enable_typography_menu = cs_get_option('typography_menu_enable');
if ( isset( $enable_typography_menu ) && $enable_typography_menu === true) { ?>
    /* MENU */
    .prague-header .prague-navigation .main-menu > li > a {
        <?php if ( cs_get_option('menu_item_family') ) {
            $font_family = cs_get_option('menu_item_family'); ?>
            font-family: "<?php echo esc_html( $font_family['family'] ); ?>", sans-serif !important;
            <?php $variant = calculateFontWeight( $font_family['variant'] );?>
            <?php if(!empty($variant['style'])) : ?>
                font-style: <?php echo esc_html( $variant['style']); ?> !important;
            <?php endif; ?>
            <?php if(!empty($variant['weight'])) : ?>
                font-weight: <?php echo esc_html( $variant['weight']); ?> !important;
            <?php endif; ?>
        <?php } ?>
        <?php if ( cs_get_option('menu_item_color') && cs_get_option('submenu_item_color') !== '' ) { ?>
            color: <?php echo esc_html( cs_get_option('menu_item_color') ); ?> !important;
        <?php } ?>
        <?php if ( cs_get_option('menu_item_size') ) {
            $menu_item_size = get_number_str(cs_get_option('menu_item_size')); ?>
            font-size: <?php echo esc_html( $menu_item_size ); ?>px !important;
        <?php } ?>
        <?php if ( cs_get_option('menu_line_height') ) {
            $menu_line_height = get_number_str(cs_get_option('menu_line_height')); ?>
            line-height: <?php echo esc_html( $menu_line_height ); ?>px !important;
        <?php } ?>
    }
<?php } ?>

/* SUBMENU */
<?php $enable_typography_submenu = cs_get_option('typography_submenu_enable');
if ( isset( $enable_typography_submenu ) && $enable_typography_submenu === true) { ?>
    /* SUBMENU */
    .prague-header .prague-navigation .sub-menu li a {
        <?php if ( cs_get_option('submenu_item_family') ) {
            $font_family = cs_get_option('submenu_item_family'); ?>
            font-family: "<?php echo esc_html( $font_family['family'] ); ?>", sans-serif !important;
            <?php $variant = calculateFontWeight( $font_family['variant'] );?>
            <?php if(!empty($variant['style'])) : ?>
                font-style:  <?php echo esc_html( $variant['style']); ?> !important;
            <?php endif; ?>
            <?php if(!empty($variant['weight'])) : ?>
                font-weight:  <?php echo esc_html( $variant['weight']); ?> !important;
            <?php endif; ?>
        <?php } ?>
        <?php if ( cs_get_option('submenu_item_color') && cs_get_option('submenu_item_color') !== '' ) { ?>
            color: <?php echo esc_html( cs_get_option('submenu_item_color') ); ?> !important;
        <?php } ?>
        <?php if ( cs_get_option('submenu_item_size') ) {
            $submenu_item_size = get_number_str(cs_get_option('submenu_item_size')); ?>
            font-size: <?php echo esc_html( $submenu_item_size ); ?>px !important;
        <?php } ?>
        <?php if ( cs_get_option('submenu_line_height') ) {
            $submenu_line_height = get_number_str(cs_get_option('submenu_line_height'));  ?>
            line-height: <?php echo esc_html( $submenu_line_height ); ?>px !important;
        <?php } ?>
    }
<?php } ?>

/* BUTTON */
<?php $enable_typography_btn = cs_get_option('typography_btn_enable');
if ( isset( $enable_typography_btn ) && $enable_typography_btn === true) { ?>
    /* BUTTON */
    .a-btn, .a-btn-arrow-2, .a-btn-2, .a-btn-arrow, .button.prev, .button.next {
        <?php if ( cs_get_option('all_button_font_family') ) {
            $font_family = cs_get_option('all_button_font_family'); ?>
            font-family: "<?php echo esc_html( $font_family['family'] ); ?>", sans-serif !important;
            <?php $variant = calculateFontWeight( $font_family['variant'] );?>
            <?php if(!empty($variant['style'])) : ?>
                font-style:  <?php echo esc_html( $variant['style']); ?> !important;
            <?php endif; ?>
            <?php if(!empty($variant['weight'])) : ?>
                font-weight:  <?php echo esc_html( $variant['weight']); ?> !important;
            <?php endif; ?>
        <?php } ?>
        <?php if ( cs_get_option('all_button_item_color') && cs_get_option('all_button_item_color') !== '' ) { ?>
            color: <?php echo esc_html( cs_get_option('all_button_item_color') ); ?> !important;
        <?php } ?>
        <?php if ( cs_get_option('all_button_font_size') ) {
            $button_item_size = get_number_str(cs_get_option('all_button_font_size')); ?>
            font-size: <?php echo esc_html( $button_item_size ); ?>px !important;;
        <?php } ?>
        <?php if ( cs_get_option('all_button_line_height') ) {
            $button_line_height = get_number_str(cs_get_option('all_button_line_height'));  ?>
            line-height: <?php echo esc_html( $button_line_height ); ?>px !important;;
        <?php } ?>
        <?php if ( cs_get_option('all_button_letter_spacing') ) {
            $button_letter_spacing = get_number_str(cs_get_option('all_button_letter_spacing'));  ?>
            letter-spacing: <?php echo esc_html( $button_letter_spacing ); ?>px !important;
        <?php } ?>
    }
<?php } ?>

/* Theme Options Custom CSS */
<?php if ( cs_get_option( 'custom_css_styles' ) ) {
    $custom_css_styles = str_replace('&gt;','>', cs_get_option( 'custom_css_styles' ));
    echo $custom_css_styles;
} ?>