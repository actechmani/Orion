import React, { FC, useEffect, useRef, useState } from 'react'
import { SearchComponent } from '../../../assets/ts/components'
import { KTIcon, toAbsoluteUrl } from '../../../helpers'
import { useSelector, useDispatch } from 'react-redux';
import { getTenantList, Tenants } from '../../../../app/store/reducer/tenentReducer';
import _isEmpty from 'lodash/isEmpty';
import _toLowerCase from 'lodash/toLower';
import _filter from 'lodash/filter';
import _sortBy from 'lodash/sortBy';
import _get from 'lodash/get';

const Search: FC = () => {
  const [menuState, setMenuState] = useState<'main'>('main')
  const element = useRef<HTMLDivElement | null>(null)
  const wrapperElement = useRef<HTMLDivElement | null>(null)
  const suggestionsElement = useRef<HTMLDivElement | null>(null)
  const emptyElement = useRef<HTMLDivElement | null>(null);
  const [filteredTenants, setFilteredTenants] = React.useState<Tenants[]>([]);
  const [tenantName, setTenantName] = React.useState<string | null>(null);

  const dispatch = useDispatch();
  const tenantList: Tenants[] = useSelector((state: any) => state.tenant.tenantList)

  useEffect(() => {
    dispatch(getTenantList());
    console.log("tenantList", tenantList)
  }, [dispatch])

  useEffect(() => {
    setFilteredTenants(tenantList)
  }, [tenantList]);

  useEffect(() => {
    setTenantName(sessionStorage.getItem('tenantName'))
  }, [sessionStorage.getItem('tenantName')])


  const handlesearchtenant = (search) => {
    console.log("search", search)
    const res = _filter(tenantList, (o) => _toLowerCase(o.name).includes(_toLowerCase(search)));
    if (res.length) {
      // Show results
      suggestionsElement.current!.classList.remove('d-none')
      // Hide empty message
      emptyElement.current!.classList.add('d-none')
    } else {
      // Hide results
      suggestionsElement.current!.classList.add('d-none')
      // Show empty message
      emptyElement.current!.classList.remove('d-none')
    }
    setFilteredTenants(res)

  }

  const selectTenant = (tenant: Tenants) => {
    console.log("tenant", tenant)
    window.sessionStorage.setItem('tenantId', _get(tenant, 'id', null));
    window.sessionStorage.setItem('tenantName', _get(tenant, 'name', null));
    setTenantName(tenant.name);
    element.current!.classList.remove('show')
    element.current!.classList.remove('menu-dropdown');
    var test = document.getElementById("kt_header_search_toggle");
    test!.classList.remove("active");
    test!.classList.remove("show");

    var test1 = document.getElementById("kt_header_search_content");
    test1!.classList.remove("show");
    test1!.removeAttribute('style');

  }


  const processs = (search: SearchComponent) => {

    console.log("element", search,)
    setTimeout(function () {
      // const number = Math.floor(Math.random() * 6) + 1

      // // Hide recently viewed
      // suggestionsElement.current!.classList.add('d-none')

      // if (number === 3) {
      //   // Hide results
      //   resultsElement.current!.classList.add('d-none')
      //   // Show empty message
      //   emptyElement.current!.classList.remove('d-none')
      // } else {
      //   // Show results
      //   resultsElement.current!.classList.remove('d-none')
      //   // Hide empty message
      //   emptyElement.current!.classList.add('d-none')
      // }

      // Complete search
      // search.complete()
    }, 1500)
    search.complete()
  }

  const clear = (search: SearchComponent) => {
    // Show recently viewed
    suggestionsElement.current!.classList.remove('d-none')

    // Hide empty message
    emptyElement.current!.classList.add('d-none');
    setFilteredTenants(tenantList)
  }

  useEffect(() => {
    // Initialize search handler
    const searchObject = SearchComponent.createInsance('#kt_header_search')

    // Search handler
    searchObject!.on('kt.search.process', processs)

    // Clear handler
    searchObject!.on('kt.search.clear', clear)
  }, [])

  return (
    <>
      <div
        id='kt_header_search'
        className='d-flex align-items-stretch'
        data-kt-search-keypress='true'
        data-kt-search-min-length='2'
        data-kt-search-enter='enter'
        data-kt-search-layout='menu'
        data-kt-menu-trigger='auto'
        data-kt-menu-overflow='false'
        data-kt-menu-permanent='true'
        data-kt-menu-placement='bottom-end'
        ref={element}
      >
        <div
          className='d-flex align-items-center'
          data-kt-search-element='toggle'
          id='kt_header_search_toggle'
        >
          <div className='btn btn-icon btn-active-light-primary w-150px h-30px w-md-140px h-md-40px'>
            <span className='p-4 fw-bold fs-3  w-130px'>{tenantName}</span>
            <KTIcon iconName='magnifier' className='fs-1 text-end' />
          </div>
        </div>

        <div
          data-kt-search-element='content'
          id='kt_header_search_content'
          className='menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px'
        >
          <div
            className={`${menuState === 'main' ? '' : 'd-none'}`}
            ref={wrapperElement}
            data-kt-search-element='wrapper'
          >
            <form
              data-kt-search-element='form'
              className='w-100 position-relative mb-3'
              autoComplete='off'
            >
              <KTIcon
                iconName='magnifier'
                className='fs-2 text-lg-1 text-gray-500 position-absolute top-50 translate-middle-y ms-0'
              />

              <input
                type='text'
                className='form-control form-control-flush ps-10'
                placeholder='Search...'
                data-kt-search-element='input'
                name="searchtenant"
                onChange={({ target: { value } }) => handlesearchtenant(value)}
              />

              <span
                className='position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1'
                data-kt-search-element='spinner'
              >
                <span className='spinner-border h-15px w-15px align-middle text-gray-400' />
              </span>

              <span
                className='btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none'
                data-kt-search-element='clear'
              >
                <KTIcon iconName='cross' className='fs-2 text-lg-1 me-0' />
              </span>


            </form>


            <div ref={suggestionsElement} className='mb-4' data-kt-search-element='main'>
              <div className='d-flex flex-stack fw-bold mb-4'>
                <span className='text-muted fs-6 me-2'>Tenant List:</span>
              </div>

              <div className='scroll-y mh-200px mh-lg-325px'>

                {filteredTenants.map((tenant, index) =>
                  <div key={index} className='d-flex align-items-center mb-5'>
                    <div className='symbol symbol-40px me-4'>
                      <span className='symbol-label bg-light'>
                        <KTIcon iconName='phone' className='fs-2 text-primary' />
                      </span>
                    </div>

                    <div className='d-flex flex-column'>
                      <a onClick={() => selectTenant(tenant)} className='fs-6 text-gray-800 text-hover-primary fw-bold'>
                        {tenant.name}
                      </a>
                      <span className='fs-7 text-muted fw-bold'></span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div ref={emptyElement} data-kt-search-element='empty' className='text-center d-none'>
              <div className='pt-10 pb-10'>
                <KTIcon iconName='search-list' className='fs-4x opacity-50' />
              </div>

              <div className='pb-15 fw-bold'>
                <h3 className='text-gray-600 fs-5 mb-2'>No result found</h3>
                <div className='text-muted fs-7'>Please try again with a different query</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export { Search }
