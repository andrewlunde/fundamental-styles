import '../../dist/bar.css';
import '../../dist/button.css';
import '../../dist/breadcrumb.css';
import '../../dist/tabs.css';
import '../../dist/toolbar.css';
import '../../dist/dynamic-page-layout.css';

export default {
    title: 'Components/Dynamic Page Layout',
    parameters: {
        description: `The dynamic page is the foundation for all pages in SAP Fiori. It is a generic layout control designed to support various floorplans and use cases.
        As a result, the content of both the header and the page can vary.
        <br><br>
        The header of the dynamic page is collapsible, which helps users to focus on the actual page content, but still ensures that important header information and actions are readily available.
        <br>
        The content of both the header and the page can differ from floorplan to floorplan.
        <br>
        The dynamic page also includes an optional footer toolbar for closing or finalizing actions that impact the whole page.
        <br><br>

## Usage 
**Use the dynamic page layout if:**

- You want to build a freestyle application that uses the foundation layout components for SAP Fiori pages, such as the dynamic page header and the footer toolbar.

**Do not use the dynamic page layout if:**

- You are planning to use SAP Fiori elements, such as the list report, analytical list page, overview page, or object page. These floorplans already incorporate the dynamic page layout.
- You want to implement an initial page or object page floorplan.
- You only need to display a small amount of information. In this case, use a dialog instead. If you can’t avoid using the dynamic page layout, use letterboxing to mitigate the issue.


    
## Structure
**Dynamic Page Layout consists of the following elements:**

- <code class="docs-code">fd-dynamic-page-layout</code> Main element
  - <code class="docs-code">fd-dynamic-page-layout\\_\\_title-area</code> The area holding title, KPI content, subtitle, and actions
    - <code class="docs-code">fd-dynamic-page-layout\\_\\_breadcrumb-container</code> Breadcrumb container, can also hold global actions
      - <code class="docs-code">fd-dynamic-page-layout\\_\\_breadcrumb</code> Breadcrumbs
    - <code class="docs-code">fd-dynamic-page-layout\\_\\_title-container</code> The container for title, KPI content and actions
      - <code class="docs-code">fd-dynamic-page-layout\\_\\_title</code> Dynamic Page Layout title
      - <code class="docs-code">fd-dynamic-page-layout\\_\\_title-content</code> The KPI content
      - <code class="docs-code">fd-dynamic-page-layout\\_\\_toolbar</code> Toolbar container for actions
      - <code class="docs-code">fd-dynamic-page-layout\\_\\_toolbar--actions</code> Global actions
    - <code class="docs-code">fd-dynamic-page-layout\\_\\_subtitle</code> Dynamic Page Layout subtitle
    - <code class="docs-code">fd-dynamic-page-layout\\_\\_header</code> Dynamic Page Layout header
    - <code class="docs-code">fd-dynamic-page-layout\\_\\_header-visibility-container</code> The container for pin/collapse buttons
      - <code class="docs-code">fd-dynamic-page-layout\\_\\_collapse-button</code> Collapse button
      - <code class="docs-code">fd-dynamic-page-layout\\_\\_pin-button </code> Pin button
    - <code class="docs-code">fd-dynamic-page-layout\\_\\_tabs</code> Tabs/Wizard can be optionally used as a header extension
    - <code class="docs-code">fd-dynamic-page-layout\\_\\_content</code> Dynamic Page Layout content
    - <code class="docs-code">fd-dynamic-page-layout\\_\\_footer</code> Dynamic Page Layout footer
        `,
        tags: ['f3', 'a11y', 'theme', 'development']
    }
};

export const desktop = () => `
    <div class="fd-dynamic-page-layout" role="region" aria-label="Dynamic Page Layout Standard Example">
        <div class="fd-dynamic-page-layout__title-area fd-dynamic-page-layout__title-area--xl">
            <ul class="fd-dynamic-page-layout__breadcrumb fd-breadcrumb">
                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
            </ul>
            <div class="fd-dynamic-page-layout__title-container">
                <div class="fd-dynamic-page-layout__title"> Balenciaga Tripple S Trainers </div>
                <div class="fd-dynamic-page-layout__title-content"> Some RANDOM things </div>
                <div class="fd-dynamic-page-layout__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                    <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
                    <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
                    <div class="fd-dynamic-page-layout__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                        <button class="fd-button fd-button--transparent" aria-label="Survey">
                            <i class="sap-icon--survey"></i>
                        </button>
                        <button class="fd-button fd-button--transparent" aria-label="Pool">
                            <i class="sap-icon--pool"></i>
                        </button>
                        <button class="fd-button fd-button--transparent" aria-label="Chart">
                            <i class="sap-icon--pie-chart"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="fd-dynamic-page-layout__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
        </div>
        <div class="fd-dynamic-page-layout__header fd-dynamic-page-layout__header--xl" role="region" >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis, 
            delectus necessitatibus incidunt numquam asperiores tenetur iure. 
            Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
        </div>
        <div class="fd-dynamic-page-layout__header-visibility-container fd-dynamic-page-layout__header-visibility-container--no-shadow">
            <div class="fd-dynamic-page-layout__header-visibility-container--left-gradient"></div>
            <div class="fd-dynamic-page-layout__header-visibility-container--button-group">
                <button class="fd-dynamic-page-layout__collapse-button fd-button fd-button--compact" 
                        aria-label="See More" 
                        aria-expanded="false" 
                        aria-haspopup="true" 
                        aria-controls="fddplhvc1">
                        <i class="sap-icon--slim-arrow-up"></i>
                </button>
                <button class="fd-dynamic-page-layout__pin-button fd-button fd-button--compact" 
                        aria-label="Pin this">
                        <i class="sap-icon--pushpin-off"></i>
                </button>
            </div>
            <div class="fd-dynamic-page-layout__header-visibility-container--right-gradient"></div>
        </div>
        <div class="fd-dynamic-page-layout__tabs--overflow">
            <ul class="fd-tabs fd-tabs--l fd-dynamic-page-layout__tabs fd-dynamic-page-layout__tabs--xl fd-dynamic-page-layout__tabs--add-shadow" role="tablist">
                <li role="listitem" class="fd-tabs__item">
                    <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
                        <span class="fd-tabs__tag">
                            Link
                        </span>
                    </a>
                </li>
                <li role="listitem" class="fd-tabs__item">
                    <a class="fd-tabs__link" aria-controls="AiWfz165" aria-selected="true" href="#AiWfz165" role="tab">
                        <span class="fd-tabs__tag">
                            Selected
                        </span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="fd-dynamic-page-layout__content fd-dynamic-page-layout__content--xl">
            <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV550" role="tabpanel">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam 
                eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid 
                dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            </div>
            <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz165" role="tabpanel" >
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
            </div>
        </div>
        <div class="fd-dynamic-page-layout__footer">
            <div class="fd-bar fd-bar--floating-footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                    </div>
                </div>
            </div>
        </div>   
    </div>
`;

desktop.storyName = 'Desktop mode';
desktop.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: 'The dynamic page layout with Desktop specification(L). The same specification also applies to XL and XXL as well.' +
        'Please note the difference in the way tabs are used. Tabs must use `fd-dynamic-page-layout__tabs` along with the size modifiers(--m_l, --xl or --s) and' +
        '`--add-shadow` at the `<ul>` level, and to ensure the correct box-shadow styling, should also add `--overflow` modifier at the parent level.'
    }
};

export const tablet = () => `
    <div class="fd-dynamic-page-layout" role="region" aria-label="Dynamic Page Layout Standard Example">
        <div class="fd-dynamic-page-layout__title-area fd-dynamic-page-layout__title-area--m_l">
            <div class="fd-dynamic-page-layout__breadcrumb-container">
                <ul class="fd-dynamic-page-layout__breadcrumb fd-breadcrumb">
                    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
                </ul>
                <div class="fd-dynamic-page-layout__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                    <button class="fd-button fd-button--transparent" aria-label="Survey">
                        <i class="sap-icon--survey"></i>
                    </button>
                    <button class="fd-button fd-button--transparent" aria-label="Pool">
                        <i class="sap-icon--pool"></i>
                    </button>
                    <button class="fd-button fd-button--transparent" aria-label="Chart">
                        <i class="sap-icon--pie-chart"></i>
                    </button>
                </div>
            </div>
            <div class="fd-dynamic-page-layout__title-container">
                <div class="fd-dynamic-page-layout__title fd-dynamic-page-layout__title--m"> Balenciaga Tripple S Trainers </div>
                <div class="fd-dynamic-page-layout__title-content"> Some RANDOM things </div>
                <div class="fd-dynamic-page-layout__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                    <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
                    <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
                </div>
            </div>
            <div class="fd-dynamic-page-layout__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
        </div>
        <div class="fd-dynamic-page-layout__header fd-dynamic-page-layout__header--m_l">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis, 
            delectus necessitatibus incidunt numquam asperiores tenetur iure. 
            Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
        </div>
        <div class="fd-dynamic-page-layout__header-visibility-container fd-dynamic-page-layout__header-visibility-container--no-shadow">
            <div class="fd-dynamic-page-layout__header-visibility-container--left-gradient"></div>
            <div class="fd-dynamic-page-layout__header-visibility-container--button-group">
                <button class="fd-dynamic-page-layout__collapse-button fd-button fd-button--compact" 
                        aria-label="See More" 
                        aria-expanded="false" 
                        aria-haspopup="true" 
                        aria-controls="fddplhvc1">
                        <i class="sap-icon--slim-arrow-up"></i>
                </button>
                <button class="fd-dynamic-page-layout__pin-button fd-button fd-button--compact" 
                        aria-label="Pin this">
                        <i class="sap-icon--pushpin-off"></i>
                </button>
            </div>
            <div class="fd-dynamic-page-layout__header-visibility-container--right-gradient"></div>
        </div>
        <div class="fd-dynamic-page-layout__tabs--overflow">
            <ul class="fd-tabs fd-tabs--l fd-dynamic-page-layout__tabs fd-dynamic-page-layout__tabs--m_l fd-dynamic-page-layout__tabs--add-shadow" role="tablist">
                <li role="listitem" class="fd-tabs__item">
                    <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
                        <span class="fd-tabs__tag">
                            Link
                        </span>
                    </a>
                </li>
                <li role="listitem" class="fd-tabs__item">
                    <a class="fd-tabs__link" aria-controls="AiWfz165" aria-selected="true" href="#AiWfz165" role="tab">
                        <span class="fd-tabs__tag">
                            Selected
                        </span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="fd-dynamic-page-layout__content fd-dynamic-page-layout__content--m_l">
            <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV550" role="tabpanel">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam 
                eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid 
                dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            </div>
            <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz165" role="tabpanel" >
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
            </div>
        </div>
        <div class="fd-dynamic-page-layout__footer">
            <div class="fd-bar fd-bar--floating-footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                    </div>
                </div>
            </div>
        </div>   
    </div>
`;

tablet.storyName = 'Tablet mode';
tablet.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: 'The dynamic page layout with Tablet specification(L). Apply modifier `page-m_l` to the `fd-dynamic-page-layout` class, and modifier `m` to the `fd-dynamic-page-layout__title` element.' +
        ' The spec recommends navigation actions in a separate row above the global actions. The navigation actions are placed at the same level as the breadcrumb.'
    }
};

export const mobile = () => `
<div style="display:flex; flex-direction: row; justify-content: space-evenly">
    <div class="fd-dynamic-page-layout" style="width:30%" role="region" aria-label="Dynamic Page Layout Mobile Example">
        <div class="fd-dynamic-page-layout__title-area fd-dynamic-page-layout__title-area--s">
            <div class="fd-dynamic-page-layout__breadcrumb-container">
                <ul class="fd-dynamic-page-layout__breadcrumb--s fd-breadcrumb">
                    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
                </ul>
                <div class="fd-dynamic-page-layout__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                        <button class="fd-button fd-button--transparent" aria-label="Close">
                            <i class="sap-icon--decline"></i>
                        </button>
                </div>
            </div>
            <div class="fd-dynamic-page-layout__title-container">
                <div class="fd-dynamic-page-layout__title"> Balenciaga Tripple S Trainers </div>
                    
                    <div class="fd-dynamic-page-layout__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                        <button class="fd-button fd-button--transparent" aria-label="More Header Content">
                            <i class="sap-icon--overflow"></i>
                        </button>
                        <button class="fd-button fd-button--transparent" aria-label="Header actions">
                            <i class="sap-icon--overflow"></i>
                        </button>
                    </div>
            </div>
            <div class="fd-dynamic-page-layout__subtitle"> Expanded header in phone </div>
        </div>
        <div class="fd-dynamic-page-layout__header fd-dynamic-page-layout__header--s" role="region">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis, 
            delectus necessitatibus incidunt numquam asperiores tenetur iure. 
            Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
        </div>
        <div class="fd-dynamic-page-layout__header-visibility-container fd-dynamic-page-layout__header-visibility-container--no-shadow">
            <div class="fd-dynamic-page-layout__header-visibility-container--left-gradient"></div>
            <div class="fd-dynamic-page-layout__header-visibility-container--button-group">
                <button class="fd-dynamic-page-layout__collapse-button fd-button fd-button--compact" 
                        aria-label="See More" 
                        aria-expanded="false" 
                        aria-haspopup="true" 
                        aria-controls="fddplhvc1">
                        <i class="sap-icon--slim-arrow-up"></i>
                </button>
            </div>
            <div class="fd-dynamic-page-layout__header-visibility-container--right-gradient"></div>
        </div>
        <div class="fd-dynamic-page-layout__tabs--overflow">
            <ul class="fd-tabs fd-tabs--l fd-dynamic-page-layout__tabs fd-dynamic-page-layout__tabs--s fd-dynamic-page-layout__tabs--add-shadow" role="tablist">
                <li role="listitem" class="fd-tabs__item">
                    <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
                        <span class="fd-tabs__tag">
                            Link
                        </span>
                    </a>
                </li>
                <li role="listitem" class="fd-tabs__item">
                    <a class="fd-tabs__link" aria-controls="AiWfz165" aria-selected="true" href="#AiWfz165" role="tab">
                        <span class="fd-tabs__tag">
                            Selected
                        </span>
                    </a>
                </li>
            </ul>  
        </div>     
        <div class="fd-dynamic-page-layout__content fd-dynamic-page-layout__content--s">
            <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV550" role="tabpanel">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam 
                eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid 
                dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            </div>
            <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz165" role="tabpanel">
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
            </div>
        </div>
        <div class="fd-dynamic-page-layout__footer">
            <div class="fd-bar fd-bar--floating-footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                    </div>
                </div>
            </div>
        </div>   
    </div>

    <div class="fd-dynamic-page-layout" style="width:30%" role="region" aria-label="Dynamic Page Layout Mobile Example">
        <div class="fd-dynamic-page-layout__title-area fd-dynamic-page-layout__title-area--s fd-dynamic-page-layout__title-area--collapsed">
            <div class="fd-dynamic-page-layout__breadcrumb-container">
                <ul class="fd-dynamic-page-layout__breadcrumb--s fd-breadcrumb">
                    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
                </ul>
                <div class="fd-dynamic-page-layout__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                        <button class="fd-button fd-button--transparent" aria-label="Close">
                            <i class="sap-icon--decline"></i>
                        </button>
                </div>
            </div>
            <div class="fd-dynamic-page-layout__title-container">
                <div class="fd-dynamic-page-layout__title"> Balenciaga Tripple S Trainers </div>
                    
                    <div class="fd-dynamic-page-layout__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                        <button class="fd-button fd-button--transparent" aria-label="More Header Content">
                            <i class="sap-icon--overflow"></i>
                        </button>
                        <button class="fd-button fd-button--transparent" aria-label="Header actions">
                            <i class="sap-icon--overflow"></i>
                        </button>
                    </div>
            </div>
            <div class="fd-dynamic-page-layout__subtitle"> Collapsed header </div>
        </div>
        <div class="fd-dynamic-page-layout__header fd-dynamic-page-layout__header--s" role="region" aria-hidden="true" id="fddplhvc1"  >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis, 
            delectus necessitatibus incidunt numquam asperiores tenetur iure. 
            Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
        </div>
        <div class="fd-dynamic-page-layout__header-visibility-container fd-dynamic-page-layout__header-visibility-container--no-shadow">
            <div class="fd-dynamic-page-layout__header-visibility-container--left-gradient"></div>
            <div class="fd-dynamic-page-layout__header-visibility-container--button-group">
                <button class="fd-dynamic-page-layout__collapse-button fd-button fd-button--compact" 
                        aria-label="See More" 
                        aria-expanded="false" 
                        aria-haspopup="true" 
                        aria-controls="fddplhvcm1">
                        <i class="sap-icon--slim-arrow-down"></i>
                </button>
            </div>
            <div class="fd-dynamic-page-layout__header-visibility-container--right-gradient"></div>
        </div>
        <div class="fd-dynamic-page-layout__tabs--overflow">
            <ul class="fd-tabs fd-tabs--l fd-dynamic-page-layout__tabs fd-dynamic-page-layout__tabs--s fd-dynamic-page-layout__tabs--add-shadow" role="tablist">
                <li role="listitem" class="fd-tabs__item">
                    <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
                        <span class="fd-tabs__tag">
                            Link
                        </span>
                    </a>
                </li>
                <li role="listitem" class="fd-tabs__item">
                    <a class="fd-tabs__link" aria-controls="AiWfz165" aria-selected="true" href="#AiWfz165" role="tab">
                        <span class="fd-tabs__tag">
                            Selected
                        </span>
                    </a>
                </li>
            </ul>   
        </div>    
        <div class="fd-dynamic-page-layout__content fd-dynamic-page-layout__content--s">
            <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV550" role="tabpanel">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam 
                eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid 
                dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            </div>
            <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz165" role="tabpanel">
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
            </div>
        </div>
        <div class="fd-dynamic-page-layout__footer">
            <div class="fd-bar fd-bar--floating-footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                    </div>
                </div>
            </div>
        </div>   
    </div>

    <div class="fd-dynamic-page-layout" style="width:30%" role="region" aria-label="Dynamic Page Layout Mobile Example">
        <div class="fd-dynamic-page-layout__summarized-title-area fd-dynamic-page-layout__summarized-title-area--s fd-dynamic-page-layout__summarized-title-area--no-shadow">
            <div class="fd-dynamic-page-layout__summarized-title"> Balenciaga Tripple S Trainers </div>
            <div class="fd-dynamic-page-layout__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                    <button class="fd-button fd-button--transparent" aria-label="Close">
                        <i class="sap-icon--slim-arrow-down"></i>
                    </button>
            </div>
        </div>
        <div class="fd-dynamic-page-layout__title-area fd-dynamic-page-layout__title-area--s fd-dynamic-page-layout__title-area--collapsed" aria-hidden="true">
            <div class="fd-dynamic-page-layout__breadcrumb-container">
            <ul class="fd-dynamic-page-layout__breadcrumb--s fd-breadcrumb">
                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
            </ul>
            <div class="fd-dynamic-page-layout__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                    <button class="fd-button fd-button--transparent" aria-label="Close">
                        <i class="sap-icon--decline"></i>
                    </button>
            </div>
            </div>
            <div class="fd-dynamic-page-layout__title-container">
                <div class="fd-dynamic-page-layout__title"> Balenciaga Tripple S Trainers </div>
                    <div class="fd-dynamic-page-layout__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                        <button class="fd-button fd-button--transparent" aria-label="More Header Content">
                            <i class="sap-icon--overflow"></i>
                        </button>
                        <button class="fd-button fd-button--transparent" aria-label="Header actions">
                            <i class="sap-icon--overflow"></i>
                        </button>
                    </div>
            </div>
            <div class="fd-dynamic-page-layout__subtitle"> Collapsed title area and header with Summary Line </div>
        </div>
        <div class="fd-dynamic-page-layout__header fd-dynamic-page-layout__header--s" role="region" aria-hidden="true" id="fddplhvc1"  >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis, 
            delectus necessitatibus incidunt numquam asperiores tenetur iure. 
            Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
        </div>
        <div class="fd-dynamic-page-layout__header-visibility-container fd-dynamic-page-layout__header-visibility-container--no-shadow" aria-hidden="true">
            <div class="fd-dynamic-page-layout__header-visibility-container--left-gradient"></div>
            <div class="fd-dynamic-page-layout__header-visibility-container--button-group">
                <button class="fd-dynamic-page-layout__collapse-button fd-button fd-button--compact" 
                        aria-label="See More" 
                        aria-expanded="false" 
                        aria-haspopup="true" 
                        aria-controls="fddplhvcm1">
                        <i class="sap-icon--slim-arrow-down"></i>
                </button>
            </div>
            <div class="fd-dynamic-page-layout__header-visibility-container--right-gradient"></div>
        </div>
        <div class="fd-dynamic-page-layout__tabs--overflow">
            <ul class="fd-tabs fd-tabs--l fd-dynamic-page-layout__tabs fd-dynamic-page-layout__tabs--s fd-dynamic-page-layout__tabs--add-shadow" role="tablist">
                <li role="listitem" class="fd-tabs__item">
                    <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
                        <span class="fd-tabs__tag">
                            Link
                        </span>
                    </a>
                </li>
                <li role="listitem" class="fd-tabs__item">
                    <a class="fd-tabs__link" aria-controls="AiWfz165" aria-selected="true" href="#AiWfz165" role="tab">
                        <span class="fd-tabs__tag">
                            Selected
                        </span>
                    </a>
                </li>
            </ul>  
        </div>     
        <div class="fd-dynamic-page-layout__content fd-dynamic-page-layout__content--s">
            <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV550" role="tabpanel">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam 
                eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid 
                dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            </div>
            <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz165" role="tabpanel">
                <h4>This is an example of a collapsed title area and header and instead of displaying a Summary Line</h4>
                <br />
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
            </div>
        </div>
        <div class="fd-dynamic-page-layout__footer">
            <div class="fd-bar fd-bar--floating-footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                    </div>
                </div>
            </div>
        </div>   
    </div>
</div>
`;

mobile.storyName = 'Mobile mode';
mobile.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: 'The dynamic page layout with Mobile specification(S). Use the `--s` modifier on `title-area`, `breadcrumb` ' +
        '`header`, and `content` elements to get the Mobile spacings. \n' +
        'This mode can additionally have a Summary Line instead of the expand/collapse header feature.  We recommend switching on this feature to help users focus on the page content.' +
        'Use the `summarized-title` element in the `summarized-title-area` container element with the `--s` modifier to show the summary line.'
    }
};

export const expandable = () => `
    <hr />
    <h3>1:  Header with both collapse and pin buttons, expanded by default. </h3>
    <hr />
    <br /><br />    
    <div class="fd-dynamic-page-layout" role="region" aria-label="Dynamic Page Layout Standard Example">
        <div class="fd-dynamic-page-layout__title-area fd-dynamic-page-layout__title-area--xl">
            <ul class="fd-dynamic-page-layout__breadcrumb fd-breadcrumb">
                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
            </ul>
            <div class="fd-dynamic-page-layout__title-container">
                <div class="fd-dynamic-page-layout__title"> Balenciaga Tripple S Trainers </div>
                <div class="fd-dynamic-page-layout__title-content"> Header with both collapse and pin buttons, expanded by default</div>
                <div class="fd-dynamic-page-layout__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                    <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
                    <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
                    <div class="fd-dynamic-page-layout__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                        <button class="fd-button fd-button--transparent" aria-label="Survey">
                            <i class="sap-icon--survey"></i>
                        </button>
                        <button class="fd-button fd-button--transparent" aria-label="Pool">
                            <i class="sap-icon--pool"></i>
                        </button>
                        <button class="fd-button fd-button--transparent" aria-label="Chart">
                            <i class="sap-icon--pie-chart"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="fd-dynamic-page-layout__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
        </div>
        <div class="fd-dynamic-page-layout__header fd-dynamic-page-layout__header--xl" role="region"  aria-hidden="false" id="fddplhvc1" >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis, 
            delectus necessitatibus incidunt numquam asperiores tenetur iure. 
            Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
        </div>
        <div class="fd-dynamic-page-layout__header-visibility-container">
            <div class="fd-dynamic-page-layout__header-visibility-container--left-gradient"></div>
            <div class="fd-dynamic-page-layout__header-visibility-container--button-group">
                <button class="fd-dynamic-page-layout__collapse-button fd-button fd-button--compact" 
                        aria-label="See More" 
                        aria-expanded="true" 
                        aria-haspopup="true" 
                        aria-controls="fddplhvc1">
                        <i class="sap-icon--slim-arrow-up"></i>
                </button>
                <button class="fd-dynamic-page-layout__pin-button fd-button fd-button--compact" 
                        aria-label="Pin this">
                        <i class="sap-icon--pushpin-off"></i>
                </button>
            </div>
            <div class="fd-dynamic-page-layout__header-visibility-container--right-gradient"></div>
        </div>
        <div class="fd-dynamic-page-layout__content fd-dynamic-page-layout__content--xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam 
            eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid 
            dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
        </div>
    </div>
    <br /><br />
    <br /><br />

    <hr />
    <h3>2: Collapsed Header with both expand and pin buttons. </h3>
    <hr />
    <br /><br />
    <div class="fd-dynamic-page-layout" role="region" aria-label="Dynamic Page Layout Standard Example">
        <div class="fd-dynamic-page-layout__title-area fd-dynamic-page-layout__title-area--xl fd-dynamic-page-layout__title-area--collapsed">
            <ul class="fd-dynamic-page-layout__breadcrumb fd-breadcrumb">
                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
            </ul>
            <div class="fd-dynamic-page-layout__title-container">
                <div class="fd-dynamic-page-layout__title fd-dynamic-page-layout__title--collapsed"> Balenciaga Tripple S Trainers Model 123456AB On Sale </div>
                <div class="fd-dynamic-page-layout__title-content">Collapsed Header with both expand and pin buttons </div>
                <div class="fd-dynamic-page-layout__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                    <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
                    <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
                    <div class="fd-dynamic-page-layout__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                        <button class="fd-button fd-button--transparent" aria-label="Survey">
                            <i class="sap-icon--survey"></i>
                        </button>
                        <button class="fd-button fd-button--transparent" aria-label="Pool">
                            <i class="sap-icon--pool"></i>
                        </button>
                        <button class="fd-button fd-button--transparent" aria-label="Chart">
                            <i class="sap-icon--pie-chart"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="fd-dynamic-page-layout__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
        </div>
        <div class="fd-dynamic-page-layout__header fd-dynamic-page-layout__header--xl" role="region"  aria-hidden="true" id="fddplhvc2" >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis, 
            delectus necessitatibus incidunt numquam asperiores tenetur iure. 
            Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
        </div>
        <div class="fd-dynamic-page-layout__header-visibility-container">
            <div class="fd-dynamic-page-layout__header-visibility-container--left-gradient"></div>
            <div class="fd-dynamic-page-layout__header-visibility-container--button-group">
                <button class="fd-dynamic-page-layout__collapse-button fd-button fd-button--compact" 
                        aria-label="See More" 
                        aria-expanded="false" 
                        aria-haspopup="true" 
                        aria-controls="fddplhvc2">
                        <i class="sap-icon--slim-arrow-down"></i>
                </button>
                <button class="fd-dynamic-page-layout__pin-button fd-button fd-button--compact" 
                        aria-label="Pin this">
                        <i class="sap-icon--pushpin-off"></i>
                </button>
            </div>
            <div class="fd-dynamic-page-layout__header-visibility-container--right-gradient"></div>
        </div>
        <div class="fd-dynamic-page-layout__content fd-dynamic-page-layout__content--xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam 
            eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid 
            dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
        </div>
    </div>
    <br /><br />
    <br /><br />
    <hr />
    <h3>3: The header can only be expanded/collapsed, not pinned.</h3>
    <hr />
    <br /><br />

    <div class="fd-dynamic-page-layout" role="region" aria-label="Dynamic Page Layout Standard Example">
        <div class="fd-dynamic-page-layout__title-area fd-dynamic-page-layout__title-area--xl">
            <ul class="fd-dynamic-page-layout__breadcrumb fd-breadcrumb">
                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
            </ul>
            <div class="fd-dynamic-page-layout__title-container">
                <div class="fd-dynamic-page-layout__title"> Balenciaga Tripple S Trainers </div>
                <div class="fd-dynamic-page-layout__title-content"> The header can only be expanded/collapsed, not pinned. </div>
                <div class="fd-dynamic-page-layout__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                    <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
                    <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
                    <div class="fd-dynamic-page-layout__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                        <button class="fd-button fd-button--transparent" aria-label="Survey">
                            <i class="sap-icon--survey"></i>
                        </button>
                        <button class="fd-button fd-button--transparent" aria-label="Pool">
                            <i class="sap-icon--pool"></i>
                        </button>
                        <button class="fd-button fd-button--transparent" aria-label="Chart">
                            <i class="sap-icon--pie-chart"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="fd-dynamic-page-layout__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
        </div>
        <div class="fd-dynamic-page-layout__header fd-dynamic-page-layout__header--xl" role="region" id="fddplhvc3" aria-hidden="false" >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis, 
            delectus necessitatibus incidunt numquam asperiores tenetur iure. 
            Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
        </div>
        <div class="fd-dynamic-page-layout__header-visibility-container">
            <div class="fd-dynamic-page-layout__header-visibility-container--left-gradient"></div>
            <div class="fd-dynamic-page-layout__header-visibility-container--button-group">
                <button class="fd-dynamic-page-layout__collapse-button fd-button fd-button--compact" 
                        aria-label="See More" 
                        aria-expanded="true" 
                        aria-haspopup="true" 
                        aria-controls="fddplhvc3">
                        <i class="sap-icon--slim-arrow-up"></i>
                </button>
            </div>
            <div class="fd-dynamic-page-layout__header-visibility-container--right-gradient"></div>
        </div>
        <div class="fd-dynamic-page-layout__content fd-dynamic-page-layout__content--xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam 
            eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid 
            dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
        </div>
    </div>
`;

expandable.storyName = 'Expandable';
expandable.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: 'The dynamic page layout header can be shown or hidden with the expand/collapse buttons.' +
        ' The header can be made sticky with the pin button. Provide the `collapsed` modifier to `title-area` and ' +
        '`title` elements for collapse-specific styling changes.'
    }
};

// export const responsive = () => `
//     <div class="fd-dynamic-page-layout" role="region" aria-label="Dynamic Page Layout Standard Example">
//         <div class="fd-dynamic-page-layout__title-area">
//             <div class="fd-dynamic-page-layout__breadcrumb-container">
//                 <ul class="fd-dynamic-page-layout__breadcrumb fd-breadcrumb">
//                     <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
//                     <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
//                     <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
//                 </ul>
//                 <div class="fd-dynamic-page-layout__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
//                         <button class="fd-button fd-button--transparent" aria-label="Survey">
//                             <i class="sap-icon--survey"></i>
//                         </button>
//                         <button class="fd-button fd-button--transparent" aria-label="Pool">
//                             <i class="sap-icon--pool"></i>
//                         </button>
//                         <button class="fd-button fd-button--transparent" aria-label="Chart">
//                             <i class="sap-icon--pie-chart"></i>
//                         </button>
//                 </div>
//             </div>
//             <div class="fd-dynamic-page-layout__title-container">
//                 <div class="fd-dynamic-page-layout__title"> Balenciaga Tripple S Trainers </div>
//                 <div class="fd-dynamic-page-layout__title-content"> Some RANDOM things </div>
//                 <div class="fd-dynamic-page-layout__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
//                     <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
//                     <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
//                 </div>
//             </div>
//             <div class="fd-dynamic-page-layout__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
//             <div class="fd-dynamic-page-layout__header">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis,
//                 delectus necessitatibus incidunt numquam asperiores tenetur iure.
//                 Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
//             </div>
//         </div>
//     </div>
// `;

// responsive.storyName = 'Responsive';
// responsive.parameters = {
//     docs: {
//         iframeHeight: 150,
//         storyDescription: 'The dynamic page layout recommends navigation actions in a separate row above the global actions. The navigation actions are placed at the same level as the breadcrumb.'
//     }
// };

export const rtl = () => `
    <div dir="rtl">
        <div class="fd-dynamic-page-layout" role="region" aria-label="Dynamic Page Layout Standard Example">
            <div class="fd-dynamic-page-layout__title-area fd-dynamic-page-layout__title-area--xl">
                <ul class="fd-dynamic-page-layout__breadcrumb fd-breadcrumb">
                    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
                </ul>
                <div class="fd-dynamic-page-layout__title-container">
                    <div class="fd-dynamic-page-layout__title"> Balenciaga Tripple S Trainers </div>
                    <div class="fd-dynamic-page-layout__title-content"> Some RANDOM things </div>
                    <div class="fd-dynamic-page-layout__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                        <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
                        <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
                        <div class="fd-dynamic-page-layout__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                            <button class="fd-button fd-button--transparent" aria-label="Survey">
                                <i class="sap-icon--survey"></i>
                            </button>
                            <button class="fd-button fd-button--transparent" aria-label="Pool">
                                <i class="sap-icon--pool"></i>
                            </button>
                            <button class="fd-button fd-button--transparent" aria-label="Chart">
                                <i class="sap-icon--pie-chart"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="fd-dynamic-page-layout__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
            </div>
            <div class="fd-dynamic-page-layout__header fd-dynamic-page-layout__header--xl" role="region" >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis, 
                delectus necessitatibus incidunt numquam asperiores tenetur iure. 
                Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
            </div>
            <div class="fd-dynamic-page-layout__header-visibility-container fd-dynamic-page-layout__header-visibility-container--no-shadow">
                <div class="fd-dynamic-page-layout__header-visibility-container--left-gradient"></div>
                <div class="fd-dynamic-page-layout__header-visibility-container--button-group">
                    <button class="fd-dynamic-page-layout__collapse-button fd-button fd-button--compact" 
                            aria-label="See More" 
                            aria-expanded="false" 
                            aria-haspopup="true" 
                            aria-controls="fddplhvc1">
                            <i class="sap-icon--slim-arrow-up"></i>
                    </button>
                    <button class="fd-dynamic-page-layout__pin-button fd-button fd-button--compact" 
                            aria-label="Pin this">
                            <i class="sap-icon--pushpin-off"></i>
                    </button>
                </div>
                <div class="fd-dynamic-page-layout__header-visibility-container--right-gradient"></div>
            </div>
            <div class="fd-dynamic-page-layout__tabs--overflow">
                <ul class="fd-tabs fd-tabs--l fd-dynamic-page-layout__tabs fd-dynamic-page-layout__tabs--xl fd-dynamic-page-layout__tabs--add-shadow" role="tablist">
                    <li role="listitem" class="fd-tabs__item">
                        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
                            <span class="fd-tabs__tag">
                                Link
                            </span>
                        </a>
                    </li>
                    <li role="listitem" class="fd-tabs__item">
                        <a class="fd-tabs__link" aria-controls="AiWfz165" aria-selected="true" href="#AiWfz165" role="tab">
                            <span class="fd-tabs__tag">
                                Selected
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="fd-dynamic-page-layout__content fd-dynamic-page-layout__content--xl">
                <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV550" role="tabpanel">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam 
                    eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid 
                    dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                </div>
                <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz165" role="tabpanel" >
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                </div>
            </div>
            <div class="fd-dynamic-page-layout__footer">
                <div class="fd-bar fd-bar--floating-footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                        </div>
                        <div class="fd-bar__element">
                            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    </div>
`;

rtl.storyName = 'RTL';
rtl.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: 'The right-to-left Dynamic Page Layout reverses the direction of the content displayed.'
    }
};
