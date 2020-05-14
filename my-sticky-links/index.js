var filterTypes = ['name', 'type', 'url', 'tags'];
var searchBoxDiv = document.getElementById('searchBox');
var searchResultBox = document.getElementById('searchResultBox');
var selectBox = document.createElement('select');
var searchInput = document.createElement('input');
var searchTearm, selectType;
var links = [
    {
        id: 1,
        name: 'Fritz',
        type: 'blog',
        url: 'https://heartbeat.fritz.ai/',
        tags: [
            {
                slug: 'react',
                name: 'React'
            },
            {
                slug: 'artificial-intelligence',
                name: 'Artificial Intelligencet'
            },
            {
                slug: 'product-design',
                name: 'Product design'
            }
        ]
    },
    {
        id: 2,
        name: 'Samanthaming',
        type: 'personal',
        url: 'https://www.samanthaming.com/',
        tags: [
            {
                slug: 'css',
                name: 'CSS'
            },
            {
                slug: 'javascript',
                name: 'Javascript'
            },
            {
                slug: 'svg',
                name: 'SVG'
            }
        ]
    },
    {
        id: 3,
        name: 'Ross Bulat',
        type: 'blog',
        url: 'https://medium.com/@rossbulat'
    },
    {
        id: 4,
        name: 'Developer Streams',
        type: 'github',
        url: 'https://github.com/bnb/awesome-developer-streams'
    },
    {
        id: 5,
        name: 'React Native App',
        type: 'course',
        url: 'https://learn.handlebarlabs.com/courses/175915/lectures/2643142',
        tags: [
            {
                slug: 'react',
                name: 'React'
            },
            {
                slug: 'react-native',
                name: 'React Native'
            },
            {
                slug: 'Redux',
                name: 'redux'
            }
        ]
    },
    {
        id: 6,
        name: 'React Navtive Guide',
        type: 'guide',
        url: 'https://www.reactnative.guide/'
    }
];
function filterObjectWithTags(link) {
    if ('tags' in link) {
        return link;
    }
}
function filterByTerm(input, searchTerm, lookupKey) {
    if (lookupKey === void 0) { lookupKey = 'name'; }
    if (!searchTerm)
        return input;
    if (!input.length)
        return [];
    var regex = new RegExp(searchTerm.toLowerCase(), "i");
    if (lookupKey != 'tags') {
        return input.filter(function (arrayElement) {
            return arrayElement[lookupKey].toLowerCase().match(regex);
        });
    }
    else {
        return input.filter(filterObjectWithTags).filter(function (link) {
            if (link.tags.filter(function (tag) { return tag.name.match(regex); }).length) {
                return link;
            }
        });
    }
}
function renderSearchResult(links) {
    searchResultBox.innerHTML = '';
    links.forEach(function (link) {
        var anchorContent = document.createElement('a');
        anchorContent.href = link.url;
        anchorContent.className = 'card-text';
        anchorContent.setAttribute('data-id', link.id.toString());
        var anchorContentDiv = document.createElement('div');
        var headContent = document.createElement('h5');
        var typeContent = document.createElement('span');
        anchorContentDiv.className = 'link-content-holder';
        typeContent.className = 'link-type';
        headContent.innerHTML = link.name;
        typeContent.innerHTML = link.type;
        anchorContentDiv.appendChild(headContent);
        anchorContentDiv.appendChild(typeContent);
        if ('tags' in link) {
            var tagsContentDiv_1 = document.createElement('div');
            tagsContentDiv_1.className = 'tag-content-holder';
            link.tags.forEach(function (tag) {
                var tagContent = document.createElement('span');
                tagContent.className = 'link-tag';
                tagContent.innerHTML = tag.name;
                tagsContentDiv_1.appendChild(tagContent);
            });
            anchorContentDiv.appendChild(tagsContentDiv_1);
        }
        anchorContent.appendChild(anchorContentDiv);
        searchResultBox.appendChild(anchorContent);
    });
}
searchBoxDiv.appendChild(selectBox);
searchBoxDiv.appendChild(searchInput);
filterTypes.forEach(function (option, i) {
    var selectOption = document.createElement('option');
    selectOption.value = option;
    selectOption.text = option;
    if (i == 0) {
        selectOption.selected;
    }
    selectBox.appendChild(selectOption);
});
searchInput.type = 'search';
searchInput.placeholder = 'Enter your search value';
renderSearchResult(filterByTerm(links, '', ''));
selectBox.addEventListener('change', function (e) {
    selectType = selectBox.value;
    renderSearchResult(filterByTerm(links, searchTearm, selectType));
});
searchInput.addEventListener('keyup', function (e) {
    searchTearm = searchInput.value;
    renderSearchResult(filterByTerm(links, searchTearm, selectType));
});
